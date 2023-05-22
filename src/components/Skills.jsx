import React from "react";
import Logo from "./Logo";
import JavaScript from "../assests/javascript1.png";
import Java from "../assests/java1.png";
import ReactIcon from "../assests/react.png";
import NodeJs from "../assests/nodejs.png";
import MongoDb from "../assests/mongodb.png";
import Solidity from "../assests/solidity.png";
import Tailwind from "../assests/tailwind.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full py-16 text-white px-4">
      <div className="w-full mx-auto flex justify-center items-center mt-[-30px]">
        <h1 className="md:text-4xl sm:text-3xl text-xl text-[#00df9a] font-bold mx-auto">
          SKILLS
        </h1>
      </div>
      <div className="max-w-[900px] mt-6 mx-auto grid md:grid-cols-4 sm:grid-cols-4 grid-cols-3 gap-8">
        <Logo image={Java} text="Java 8" />
        <Logo image={JavaScript} text="Javascript" />
        <Logo image={ReactIcon} text="React" />
        <Logo image={NodeJs} text="NodeJS" />
        <Logo image={MongoDb} text="MongoDB" />
        <Logo image={Tailwind} text="Tailwind CSS" />
        <Logo image={Solidity} text="Solidity" />
      </div>
    </div>
  );
};

export default Skills;






{/* <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Wants tips & tricks to optimize your flow?</h1>
            <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder="Enter Email"/>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black'>Notify me</button>
  </div>*/}
        {/* <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span></p> */}