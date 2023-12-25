import { useLoaderData, useParams } from "react-router-dom";
import { Button, Select, TextInput,Textarea } from 'flowbite-react';
import { useState } from "react";
import axios from "axios";


const EditBooks = () => {


  const { id } = useParams();
  const { title, author, category, imageUrl, description, pdfUrl } = useLoaderData();

  const bookCategory = [
    "Fiction", "Non-Fiction", "Mystery", "Drama", "Science Fiction", "Fantasy", "History",
    "Horrer", "Biography", "Autobiography", "Self Help", "Memoir", "Buisness", "Children Books",
    "Travel", "Religion", "Art and Design"
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(category);

  const handleChangeSelectValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }

  const handleBookUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedTitle = form.title.value;
    const updatedAuthor = form.author.value;
    const updatedImageUrl = form.imageUrl.value;
    const updatedCategory = form.category.value;
    const updatedDescription = form.description.value;
    const updatedPdfUrl = form.pdfUrl.value;

    const updatedBook = {
      title: updatedTitle,
      author: updatedAuthor,
      imageUrl: updatedImageUrl,
      category: updatedCategory,
      description: updatedDescription,
      pdfUrl: updatedPdfUrl,
    };

    try {
      // Make a PUT or PATCH request to update the book
      await axios.patch(`http://localhost:5000/book/${id}`, updatedBook);
      alert("Book updated successfully!");
    } catch (error) {
      alert("Error updating book:", error);
    }
  
  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update The Book</h2>
      <form onSubmit={handleBookUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className='flex gap-8'>
        {/* boot title */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <h3 className='font-bold'>Book Title</h3>
        </div>
        <TextInput id="title" name='title' type="text" placeholder="Book Title" defaultValue={title} required />
      </div>
      {/* author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <h3 className='font-bold'>Author Name</h3>
        </div>
        <TextInput id="author" name='author' type="text" placeholder="Author name" defaultValue={author} required />
      </div>
      </div>
      {/* second row  */}
      <div className='flex gap-8'>
        {/* image url */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <h3 className='font-bold'>Image Url</h3>
        </div>
        <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Image Url" defaultValue={imageUrl} required />
      </div>
      {/* category*/}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <h3 className='font-bold'>Category</h3>
        </div>
        <Select id='inputState' name='category' className='w-full rounded' vlaue={selectedBookCategory} defaultValue={category} onChange={handleChangeSelectValue} >
          {
            bookCategory.map((option)=> <option key={option} value={option}>{option}</option>)
          }
        </Select>
         </div>
       
      </div>
      {/* Description */}
      <div>
        <div className="mb-2 block">
          <h3 className='font-bold'>Book Description</h3>
        </div>
        <Textarea id="description" name='description' placeholder="Write your book description..." required rows={6} defaultValue={description}  className='w-full'/>  
      </div>

      {/* book pdf link */}
     < div>
        <div className="mb-2 block">
          <h3 className='font-bold'>Book PDF URL</h3>
        </div>
        <TextInput id="pdfUrl" name='pdfUrl' type="text" placeholder="Book PDF Url" defaultValue={pdfUrl} required />
      </div>

      <Button type="submit" className='mt-5'>Update Book</Button>
    </form>
    </div>
  )
}

export default EditBooks