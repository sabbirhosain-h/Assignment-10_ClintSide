import React, { useEffect, useState } from 'react';
import { DataContext } from './AuthContext';
import axios from 'axios';

const DataProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [id, setId] = useState("")

    const api = 'http://localhost:3000/AllBooks'
    


    useEffect(() => {
   const getBookData = async () => {
    try {
      const res = await axios.get(api);
      setBooks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

    getBookData();
    }, []);

   
    const bookData = {
        books,
        setBooks,
        id,
        setId
    }
    return (
        <DataContext value={bookData}>
            {children}
        </DataContext>
    );
};

export default DataProvider;