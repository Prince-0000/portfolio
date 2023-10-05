import React from "react";
import Logo from "./Logo";
import JavaScript from "../assests/javascript1.png";
import Java from "../assests/java1.png";
import ReactIcon from "../assests/react.png";
import NodeJs from "../assests/nodejs.png";
import MongoDb from "../assests/mongodb.png";
import Tailwind from "../assests/tailwind.png";
import Postgre from '../assests/postgre.png';

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
        <Logo image={Postgre} text="Postgre SQL" />
      </div>
    </div>
  );
};

export default Skills;





