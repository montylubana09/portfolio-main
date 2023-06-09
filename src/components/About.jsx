import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5 ">
          As a software developer with over two years of experience in the
          field, I have focused primarily on developing applications using the
          React and React Native platforms. My expertise lies in building
          applications in the MERN stack, which includes MongoDB, ExpressJS,
          ReactJS, and NodeJS.
          <br />
          During my career, I have developed a deep understanding of the React
          and React Native frameworks and have become proficient in using the
          latest development tools and technologies to create high-quality,
          efficient applications. I have experience working on a wide range of
          projects, including web applications, mobile applications, and complex
          enterprise solutions.
        </p>
        <br />

        <p className="text-xl">
          In addition to my technical skills, I have strong problem-solving
          abilities and a keen eye for detail. I enjoy working collaboratively
          with teams and am skilled at communicating complex technical concepts
          to non-technical stakeholders.
          <br />
          My experience as a software developer has equipped me with the skills,
          knowledge, and expertise necessary to take on challenging development
          projects and deliver high-quality results.
        </p>
      </div>
    </div>
  );
};

export default About;
