import React from 'react'
import Card from './Card';
import Ecart from '../assests/ecart.png';
import Counterfiet from '../assests/counterfiet.png';
// import Workout from '../assests/workout.png';

const Projects = () => {
  return (
    <div className='bg-white flex flex-col items-center'>
        <h1 className='md:text-4xl mt-10 z-10 bg-white sm:text-3xl text-xl text-black font-bold mx-auto'>PROJECTS</h1>

    <div id='cards' className='mt-[-3rem] w-full bg-white py-[8rem] px-4'>
        <div className='max-w-[1000px] mx-auto grid md:grid-cols-3 gap-8'>
            <Card image={Ecart} title="Ecommerce App"/>
            <Card image={Counterfiet} title="Counterfiet"/>
            <Card title="Workout App"/>
            </div>




            {/* <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mt-[-3rem] mx-auto bg-white' src={Single} alt='single'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] my-4 rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mt-[-3rem] mx-auto bg-white' src={Double} alt='single'/>
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mt-[-3rem] mx-auto bg-white' src={Triple} alt='single'/>
                <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Start Trial</button>
            </div> */}
        </div>
    </div>
  )
}

export default Projects;
