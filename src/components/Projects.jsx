import React from "react";
import Card from "./Card";
import Dukaan from '../assests/grocery.png'
import Counterfiet from "../assests/counterfiet.png";
import Workout from "../assests/workout.png";

const Projects = () => {
  return (
    <div id="project" className="bg-white flex flex-col items-center">
      <h1 className="md:text-4xl mt-10 z-10 bg-white sm:text-3xl text-xl text-black font-bold mx-auto">
        PROJECTS
      </h1>

      <div className="mt-[-3rem] w-full bg-white py-[7rem] px-4">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 gap-8">
          <Card
            image={Dukaan}
            title="Grocery App"
            liveUrl="https://dukaann.vercel.app/"
            codeUrl="https://github.com/Prince-0000/grocery_web_app"
          />
          <Card
            image={Counterfiet}
            title="Counterfiet"
            liveUrl=""
            codeUrl="https://github.com/Prince-0000/Counterfeit"
          />
          <Card
            image={Workout}
            title="Workout App"
            liveUrl=""
            codeUrl="https://github.com/Prince-0000/workout_web"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
