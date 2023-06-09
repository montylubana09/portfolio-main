import React from "react";
import { Link } from "react-scroll";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Experienced MERN Stack Developer with Expertise in React and React
            Native for High-Quality Application Development
          </p>
          <div>
            <Link to="portfolio" smooth duration={1600}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300  ">
                  <BsFillArrowRightCircleFill size={24} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
