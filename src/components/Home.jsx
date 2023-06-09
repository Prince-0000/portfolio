import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Designer", "Coder"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  const discordUrl = "https://discord.gg/8asyB8ZU";
  const instagramUrl = "https://www.instagram.com/prince_mehta01/";
  const linkedinUrl = "https://www.linkedin.com/in/prince0000";
  const githubUrl = "https://github.com/Prince-0000";
  return (
    <div id="home" className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center items-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold md:mb-[-10px] p-2">
          HEY THERE I'M
        </p>
        <h1 className="md:text-5xl sm:text-5xl text-4xl font-bold md:py-6 ">
          PRINCE MEHTA
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl sm:pt-10 text-xl font-bold py-4"></p>
          <span className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2">
            <span>A </span>
            {text}
            <span>
              <Cursor />
            </span>
          </span>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 px-2 mt-4">
          Crafting Seamless Experiences with MERN Magic: Empowering Innovation
          and Accelerating Web Development!
        </p>
        {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button> */}
        <div className="flex justify-center items-center space-x-5 md:w-[75%] my-8">
          <a href={discordUrl} target="blank">
            <FaDiscord size={30} />
          </a>
          <a href={instagramUrl} target="blank">
            <FaInstagram size={30} />
          </a>
          <a href={linkedinUrl} target="blank">
            <FaLinkedinIn size={30} />
          </a>
          <a href={githubUrl} target="blank">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
