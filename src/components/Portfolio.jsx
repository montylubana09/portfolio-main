import React from "react";
import LuminousLiquor from "../assets/portfolio/LuminousLiquor.png";
import YYCWinter from "../assets/portfolio/YYCWinter.png";
import FoodieApp from "../assets/portfolio/FoodieApp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: LuminousLiquor,
      demo: null,
      code: null,
    },
    {
      id: 2,
      src: YYCWinter,
      demo: "https://drive.google.com/file/d/1Ht-y_zmkRBzTiOyn-cq_Xr6-t6Z7NeRT/view?usp=share_link",
      code: "https://github.com/jmeng-sys-hackathon/hackathon-frontend",
    },
    {
      id: 3,
      src: FoodieApp,
      demo: "https://drive.google.com/file/d/1UyhlDQANmGJVk44AILqp06jgTebQocmf/view?usp=share_link",
      code: "https://github.com/montylubana09/FoodieApp",
    },
  ];

  const handleDemoClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const handleCodeClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  disabled={!demo}
                  onClick={() => handleDemoClick(demo)}
                  title={!demo ? "Demo link unavailable" : ""}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  disabled={!code}
                  onClick={() => handleCodeClick(code)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  title={
                    !code ? "Link unavailable (Organization Code)" : ""
                  }
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
