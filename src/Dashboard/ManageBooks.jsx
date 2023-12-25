import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ManageBooks = () => {

const [allbooks,setAllBooks] = useState([])

useEffect(() => {
  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/all-books");
      setAllBooks(response.data); // Assuming the response is an array of books
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  fetchBooks();
}, []); 

// delete a book
const handleDelete = async (id) => {
  try {
    // Make a DELETE request to delete the book with the given id
    await axios.delete(`http://localhost:5000/book/${id}`);
    alert("book is deleted succesfully")
    // After successful deletion, update the book list
    const updatedBooks = allbooks.filter(book => book._id !== id);
    setAllBooks(updatedBooks);

  } catch (error) {
    console.error("Error deleting book:", error);
  }
}

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

{/* table for book data */}
<div className="overflow-x-auto">
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Title</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allbooks.map((book,index) => <Table.Body className='divide-y' key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </Table.Cell>
            <Table.Cell>{book.title}</Table.Cell>
            <Table.Cell>{book.author}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                Edit
              </Link>
              <button onClick={()=> handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 mr-5'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>
          )          
        }
     
     
      </Table>
    </div>
    </div>
  )
}

export default ManageBooks