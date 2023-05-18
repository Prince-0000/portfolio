import React from 'react'
import Typed from 'react-typed'
import AiFillHome from 'react-icons/ai';
import { cilClipboard } from '@coreui/icons-react';

const Banner = () => {
  return (
    <div className='w-full py-[7rem] text-white px-4 justify-center items-center flex flex-col'>
      <div className='w-full max-w-[950px] mt-[-55px] items-center justify-center flex flex-col mx-auto'>
        <h1 className='md:text-4xl sm:text-3xl text-xl font-bold'>Subscribe!! To watch latest
        <Typed 
            className='md:text-4xl sm:text-3xl text-xl font-bold md:p-4 p-2'
            strings={['content','videos','blogs']}
            typeSpeed={120}
            backSpeed={140}
            loop
        />
         </h1>
        <p className='p-2 text-[#00df9a]'>We offer latest blogs on new technology</p>
      </div>
      <div className='w-[80px] mt-[50px] flex flex-col'>
        <ul className='flex flex-col '>
            <a className='p-3' href='https://instagram.com' alt='Instagram' target='blank'><cilClipboard /><span>Instagram</span></a>
            <a className='p-3' href='https://slack.com' alt='Instagram' target='blank'>Slack</a>
            <a className='p-3' href='https://discord.com' alt='Instagram' target='blank'>Discord</a>
        </ul>
      </div>
    </div>
  )
}

export default Banner
