import React from "react";
// import { useNavigate } from 'react-router-dom';
import Profile from "../assests/profile1.png";

const About = () => {
  return (
    <div id="about" className="w-full bg-white py-[8rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] my-0 mx-auto border-0"
          src={Profile}
          alt="laptop"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold mt-2">ABOUT ME</p>
          <h1 className="md:text-3xl whitespace-pre sm:text-2xl text-xl font-bold py-2">
            Welcome to my portfolio!
          </h1>
          <p>
            {" "}
            I am a third year B.Tech CS student at Graphic Era Hill Univerity. I
            am a skilled web developer with experience in both front-end and
            back-end development. I am also a proficient coder with strong
            problem-solving skills. I am dedicated and hardworking, with a
            passion for software development. I am also flexible and adaptive,
            able to quickly learn new technologies and adapt to new situations.
          </p>
          <p className="py-3">
            My portfolio showcases a diverse collection of projects that
            highlight my problem-solving abilities
          </p>
          <p>
            I am dedicated to staying up-to-date with the latest industry trends
            and technologies. I continuously expand my knowledge and skills
            through self-learning and professional development
          </p>
          {/* <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;

// I am a third year B.Tech CS student at Graphic Era Hill Univerity. I am a skilled web developer with experience in both front-end and back-end development. I am also a proficient coder with strong problem-solving skills. I am dedicated and hardworking, with a passion for software development. I am also flexible and adaptive, able to quickly learn new technologies and adapt to new situations.

// In my previous projects, I have developed web applications using a variety of programming languages and technologies. I also compete in various hackathons

// I am confident that I have the skills and experience to be a valuable asset to your team. I am eager to learn and take on new challenges.
