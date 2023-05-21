import React from 'react'
import Profile from '../assests/profile1.png'

const Analytics = () => {
  return (
    <div id='about' className='w-full bg-white py-[8rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] my-0 mx-auto border-0' src={Profile} alt="laptop" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold mt-2'>ABOUT ME</p>
                <h1 className='md:text-3xl whitespace-pre sm:text-2xl text-xl font-bold py-2'>Welcome to my portfolio!</h1>
                <p> I am an experienced and dedicated web developer with a strong passion for
                   creating innovative and visually appealing websites. With expertise in frontend and backend development, I have successfully 
                   built numerous projects that combine functionality with stunning designs.
                </p>
                <p className='py-3'>
                My portfolio showcases a diverse collection of projects that highlight my problem-solving abilities  
                </p>
                <p>I am dedicated to staying up-to-date with the latest industry trends and technologies. I continuously expand my knowledge and skills through
                   self-learning and professional development</p>
<button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
