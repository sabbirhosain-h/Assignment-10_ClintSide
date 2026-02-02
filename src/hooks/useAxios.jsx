import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://the-book-heaven-server-delta.vercel.app"
})
const useAxios = () => {

    return axiosInstance;
};

export default useAxios;