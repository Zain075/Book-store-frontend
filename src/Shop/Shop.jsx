import  { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books,setBooks] = useState([]);

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
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books Are Here</h2>
    <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-1 grid-cols-1'>

{
        books.map (book =>
          (
            <div key={book._id}>
              <Card> 
                <img src={book.imageUrl} alt="" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       {book.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {book.description}
      </p>
      <button className='bg-blue-700 font-semibold text-white py-2 rounded '>Buy Now</button>
    </Card>
            </div>
        ))
      }

    </div>

    </div>
  )
}

export default Shop