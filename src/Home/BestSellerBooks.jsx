import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/all-books');
        // console.log("Reached here");
        // console.log(response.data);
        const data = response.data;
        setBooks(data.slice(0,6));
        // console.log(books);  // This will log the previous state, not the updated state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [books]);

  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default BestSellerBooks;
