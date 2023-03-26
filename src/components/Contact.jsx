// import { useState } from "react";
import React from "react";

const Contact = () => {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [message, setMessage] = useState();

  const clearForm = () => {
    alert("Thank you for connecting. I will be in touch soon!");
    // setName("");
    // setEmail("");
    // setMessage("");
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Get in Touch!</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            target="_blank"
            action="https://getform.io/f/0e8a0aac-36bf-4d9e-b83f-cd70be71e459"
            method="POST"
            //onSubmit={clearForm}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter you name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter you email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-cyan-500
             to-blue-500 px-6 py-3 my-8 mx-auto flex items-center
              rounded-md hover:scale-110 duration-300"
              onClick={clearForm}
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
