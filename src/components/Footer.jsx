import React from 'react'
import {CgMail} from 'react-icons/cg';
import {
    FaDiscord,
    FaGithub,
    FaInstagram,
    FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:princemehta516@gmail.com'
    };
  return (
    <div id='footer' className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>PRINCE MEHTA</h1>
            <p className='py-4 text-lg'>Follow me on social media handle -</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <a href='https://discord.com/channels/@me/946917246876405828' target='blank'><FaDiscord size={30}/></a>
                <a href='https://www.instagram.com/prince_mehta01/' target='blank'><FaInstagram size={30}/></a>
                <a href='https://www.linkedin.com/in/prince0000/' target='blank'><FaLinkedinIn size={30}/></a>
                <a href='https://github.com/Prince-0000' target='blank'><FaGithub size={30}/></a>
            </div>
        </div>
        <div className='lg:col-span-2 flex flex-row justify-between'>
            {/* <h1 className='md:pt-7 md:pb-0 pb-5'>Subscribe to my blog</h1> */}
        {/* <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder="Enter Email"/>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black'>Notify me</button>
        </div> */}
            <div className='md:hidden md:invisible'>
                <h5 className='pb-4'>Contact Info</h5>
                <button onClick={handleEmailClick} className='text-3xl'><CgMail/></button>
                {/* <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul> */}
            </div>
             <div>
                {/*<h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Price</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul> */}
            </div>
            <div className='md:visible invisible'>
                <h5 className='pb-4'>Contact Info</h5>
                <button onClick={handleEmailClick} className='text-3xl'><CgMail/></button>
                {/* <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Career</li>
                </ul> */}
            </div>
            <div>
                {/* <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul> */}
            </div>
        </div>
    </div>
  )
}

export default Footer
