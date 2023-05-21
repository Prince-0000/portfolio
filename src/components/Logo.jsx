import React from 'react'
import Single from '../assests/single.png';
import Double from '../assests/double.png';
import Triple from '../assests/triple.png';

const Logo = ({image,text}) => {
  return (
    <div className='w-full h-30 flex flex-col p-4 my-4 items-center rounded-lg hover:scale-105 duration-300'>
          <img src={image} alt='Java' className='w-[65px] mb-0 pb-0 border-0 my-0 bg-black'/>
          <h4 className='md:text-2xl sm:text-xl mb-0 pb-0 text-lg mx-auto font-bold pt-2'>{text}</h4>
    </div>
  )
}

export default Logo
