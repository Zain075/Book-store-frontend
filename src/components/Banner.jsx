import React from 'react'
import BannerCard from '../Home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy & Sell Your Books <span>For the Best prices</span></h2>
            <p className='md:w-4/5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis tenetur cumque alias mollitia vel saepe at deleniti, non earum quibusdam porro nisi suscipit? Totam quo dolor eius pariatur voluptatem!</p>
          
            </div>

            {/* right side  */}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner