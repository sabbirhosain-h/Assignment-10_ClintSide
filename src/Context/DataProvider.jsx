import React, { useEffect, useState } from 'react';
import { DataContext } from './AuthContext';
import useAxios from '../hooks/useAxios';

const DataProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [id, setId] = useState("");

    const Instance = useAxios();

    useEffect(() => {
        const getBookData = async () => {
            try {
                const res = await Instance.get("/AllBooks");
                setBooks(res.data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        getBookData();
    }, []); 

    const bookData = {
        books,
        setBooks,
        id,
        setId
    };

    return (
        <DataContext.Provider value={bookData}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;