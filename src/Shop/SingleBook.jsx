
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const data = useLoaderData();
    console.log("///////",data);

    const {  title, imageUrl,author,category,description } = data;
    console.log(title);
    console.log(imageUrl)
    return (
        <div className='my-28 px-4  lg:px-24 flex flex-row justify-around bg-slate-600 text-white items-center'>
           <div className='my-6'>
            <img src={imageUrl} alt="image" className='shadow'/>
           </div>
           <div className='w-96'>
            <h2 className='py-2 font-bold text-4xl'>{ title}</h2>
        <h3 className='py-2 font-semibold text-2xl'>{author}</h3>
        <h5 className='py-2 font-semibold text-lg'>{category}</h5>
        <p className='py-2 font-normal text-gray-200'>{description}</p>
           </div>
           
        </div>
    );
};

export default SingleBook