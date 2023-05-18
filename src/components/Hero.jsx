import React from 'react'
// import Typed from 'react-typed';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center items-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>HEY THERE I'M</p>
            <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 '>PRINCE MEHTA</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'></p>
                {/* <Typed 
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings = {['A WEB DEVELOPER','CODER']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop 
                /> */}
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 px-2 mt-4'>Crafting Seamless Experiences with MERN Magic: Empowering Innovation and Accelerating Web Development!</p>
            {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button> */}
            <div className='flex justify-center items-center space-x-5 md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Hero
