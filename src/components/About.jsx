import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="mx-auto max-w-screen-lg p-4 flex flex-col justify-center w-full h h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nulla
          sequi quo labore minus vel eos ipsa? Nisi minus accusantium
          repudiandae magni. Amet similique natus nemo eius rerum quam aperiam
          nihil, molestias dolorem consequatur qui suscipit itaque ipsa
          repudiandae minus illum tenetur. Vel consectetur blanditiis
          voluptatibus tenetur praesentium non officiis!
        </p>
        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat
          dolores accusamus earum at nulla dicta recusandae facere, omnis amet,
          similique sunt harum dignissimos iusto laboriosam a soluta molestias
          officia!
        </p>
      </div>
    </div>
  );
};

export default About;
