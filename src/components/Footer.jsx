import React from "react";
import { CgMail } from "react-icons/cg";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:princemehta516@gmail.com";
  };
  const discordUrl = "https://discord.gg/8asyB8ZU";
  const instagramUrl = "https://www.instagram.com/prince_mehta01/";
  const linkedinUrl = "https://www.linkedin.com/in/prince0000";
  const githubUrl = "https://github.com/Prince-0000";
  return (
    <div
      id="footer"
      className="max-w-[1240px] mx-auto py-16 px-4 grid grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300"
    >
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          PRINCE MEHTA
        </h1>
        <p className="py-4 text-lg">Follow me on social media handle</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a href={discordUrl} target="_blank" rel="noreferrer">
            <FaDiscord size={30} />
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <FaLinkedinIn size={30} />
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-row justify-evenly">
        <div>
          <h2 className="flex items-center pb-[44px] md:text-2xl text-l align-middle">
            Always ready to help,
            <br />
            Feel free to message me
          </h2>
        </div>
        <div className="md:pl-[120px] pl-[45px] pb-[-50px]">
          <h5 className="pb-4">Contact Info</h5>
          <button onClick={handleEmailClick} className="text-3xl">
            <CgMail />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
