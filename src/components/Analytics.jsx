import React from 'react'
import Laptop from '../assests/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] my-4 mx-auto' src={Laptop} alt="laptop" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICAL DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytical Centrally</h1>
                <p>Artificial Intelligence (AI) continues to advance rapidly, revolutionizing various industries with applications such as natural language processing, computer vision, and autonomous systems.
The Internet of Things (IoT) has expanded exponentially, connecting an increasing number of devices and enabling data-driven decision-making, smart homes, and improved industrial processes.

</p>
<button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
