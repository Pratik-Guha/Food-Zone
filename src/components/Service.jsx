import React from 'react'
import {biryani1,biryani2,biryani4} from '../assets'
const ServicesData = [
    {
      id: 1,
      img: 'https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043064_1280.jpg',
      name: "Biryani",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
      id: 2,
      img:'https://cdn.pixabay.com/photo/2017/01/16/17/45/pancake-1984716_1280.jpg',
      name:"Strawbery breta",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
      id: 3,
      img: 'https://cdn.pixabay.com/photo/2020/05/09/10/59/coffee-5149151_1280.jpg',
      name: "Cold Cofee",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
  ];
const Service = () => {
  return (
    <div className='py-10 bg-gray-100 dark:bg-gray-950'>
        <div className='container'>
            <div  className=' text-center mb-20 max-w-[400px] mx-auto'>
                <h1 className=' text-3xl font-bold dark:text-white'>Our Services</h1>
                <p className=' text-xs text-gray-400'>Decades of delicious memories, generations served with a smile. Renowned for quality, revered for warmth, Food Zone: a table waiting for 🍕your story.🍕</p>
            </div>
            <div>
              <div className=' grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-16 md:gap-5 place-items-center'>
                {
                  ServicesData.map(({id,img,name,description})=>{
                    return <div key={id} className='max-w-[300px] flex justify-center items-center flex-col group rounded-2xl bg-white  dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 py-4 shadow-xl'>
                      <div className=''>
                        <img src={img} alt="" className='mx-auto inline-flex justify-center items-center  transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-full w-44 h-44' />
                      </div>
                      <div className=' p-4 text-center'>
                        <h1 className=' text-xl font-bold text-gray-500  dark:text-white'>{name}</h1>
                        <p className=' text-gray-500 text-sm line-clamp-2 group-hover:text-white duration-300'>{description}</p>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default Service