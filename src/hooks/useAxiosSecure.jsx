import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: "https://the-book-heaven-server-delta.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { user, SignOut } = useContext(AuthContext);

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (user?.accessToken) {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error?.response?.status;

        if (status === 401 || status === 403) {
          SignOut?.().then(() => {
            navigate("/Login");
          });
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, SignOut, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
