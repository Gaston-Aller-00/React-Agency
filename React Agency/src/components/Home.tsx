import React from "react";

//corrusel flowbit shit
import { Carousel } from "flowbite-react";
import banner1 from "../assets/banner.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen ">
        {/* carrusel con los aasets  */}
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row marker:items-center justify-between gap-14">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* texto del hero */}
            <div className=" -mr-12 md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 8 years
                </span>{" "}
              </h1>
              <p className="text-gray-500 mb-8 ">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              {/* btn del register con el efecto -translate */}
              <button className="btn-primary">
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
