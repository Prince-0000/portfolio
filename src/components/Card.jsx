import React from "react";

const Card = ({image,title}) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-5 rounded-lg hover:scale-105 duration-300">
      <img
        className="w-[200px] mt-[-3rem] mx-auto bg-white"
        src={image}
        alt="single"
      />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <button className="bg-[#00df9a] w-[200px] my-3 rounded-md font-medium mx-auto my-6 px-6 py-3 text-black">
        <a href='https://ecart-five.vercel.app/' alt='Demo' target='_blank'>
            Live Demo
        </a>
      </button>
      <button className="bg-black text-[#00df9a] w-[200px] my-3 rounded-md font-medium mx-auto my-6 px-6 py-3">
        <a href='https://github.com/Prince-0000/ecommerce_app' alt="source" target='_blank'>
            Source Code
        </a>
      </button>
    </div>
  );
};

export default Card;
