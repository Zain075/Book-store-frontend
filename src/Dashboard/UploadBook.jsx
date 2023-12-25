import { Button, Select, TextInput,Textarea } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';

const UploadBook = () => {

  const bookCategory = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Drama",
    "Science Fiction",
    "Fantasy",
    "History",
    "Horrer",
    "Biography",
    "Autobiography",
    "Self Help",
    "Memoir",
    "Buisness",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]
  const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategory[0])

  const handleChangeSelectValue = (event) =>{
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value)
  }


    const handleBookSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;
  
      const title = form.title.value;
      const author = form.author.value;
      const imageUrl = form.imageUrl.value;
      const category = form.category.value;
      const description = form.description.value;
      const pdfUrl = form.pdfUrl.value;
  
      const bookObj = {
        title,
        author,
        imageUrl,
        category,
       description,
        pdfUrl,
      };
  
      try {
        // send data to db using Axios
        const response = await axios.post('http://localhost:5000/upload-book', bookObj);
        console.log(response.data);
        alert('Book uploaded Successfully');
        form.reset()
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to upload book');
      }
  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload Your Book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className='flex gap-8'>
        {/* boot title */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <h3 className='font-bold'>Book Title</h3>
        </div>
        <TextInput id="title" name='title' type="text" placeholder="Book Title" required />
      </div>
      {/* author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <h3 className='font-bold'>Author Name</h3>
        </div>
        <TextInput id="author" name='author' type="text" placeholder="Author name" required />
      </div>
      </div>
      {/* second row  */}
      <div className='flex gap-8'>
        {/* image url */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <h3 className='font-bold'>Image Url</h3>
        </div>
        <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Image Url" required />
      </div>
      {/* category*/}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <h3 className='font-bold'>Category</h3>
        </div>
        <Select id='inputState' name='category' className='w-full rounded' vlaue={selectedBookCategory} onChange={handleChangeSelectValue}>
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
        <Textarea id="description" name='description' placeholder="Write your book description..." required rows={6}  className='w-full'/>  
      </div>

      {/* book pdf link */}
     < div>
        <div className="mb-2 block">
          <h3 className='font-bold'>Book PDF URL</h3>
        </div>
        <TextInput id="pdfUrl" name='pdfUrl' type="text" placeholder="Book PDF Url" required />
      </div>

      <Button type="submit" className='mt-5'>Upload Book</Button>
    </form>
    </div>
  )
}

export default UploadBook