import React from 'react'
import {play_store,app_store,mobile_bike} from '../assets'
const App_Store = () => {
  return (
    <div className=' bg-gray-100 dark:bg-gray-950 py-14'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
            <div className=' space-y-6 max-w-xl mx-auto'>
                <h1 className=' text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-100 text-gray-700'>
                    FoodZone is Avaailable for Android & IOS
                </h1>
            <div className='flex flex-wrap  justify-center sm:justify-start items-center'>
                <a href="#">
                    <img src={play_store} alt="playstore" 
                    className=' max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                </a>
                <a href="#">
                    <img src={app_store} alt="playstore" 
                    className=' max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                </a>
            </div>
            </div>
            <div>
                <img src={mobile_bike} className=' mx-auto max-w-[300px]' alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default App_Store