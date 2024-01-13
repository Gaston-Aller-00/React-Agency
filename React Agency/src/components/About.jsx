import React from "react";
import aboutImg from "../assets/about.png";
import payment from "../assets/icons/payments.png"
import member from "../assets/icons/group-club.png"
import club from "../assets/icons/group.png"
import booking from "../assets/icons/click.png"




const About = () => {
  return (
    <div id="about">
      {/* about textito */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 ">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <img src={aboutImg} alt="about pic" />
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 ">
              The best experience of Nexcent
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8">
            Experience the next level of data security with our advanced encryption solutions. Safeguard your digital assets and ensure the confidentiality of sensitive information.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      {/* company statssss */}
      <div className="px-4 lg:px-14 max-w-screen  bg-neutralSilver py-12 ">
  <div className="flex flex-col lg:flex-row justify-center items-center  ">
    <div className="mb-8 ml-16 lg:w-3/4 text-center lg:text-left ">
      <h2 className="text-3xl md:text-4xl text-neutralDGrey font-semibold mb-4">
        Helping a local <br />
        <span className="text-brandPrimary">business reinvent itself</span>
      </h2>
      <p className="text-base md:text-lg text-neutralDGrey mb-4">
        We reached here with our hard work and dedication.
      </p>
    </div>
    {/* las stats */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mr-32">
      <div className="flex items-center gap-4 mb-4 ">
        <img src={payment} alt="pic" />
        <div className="">
          <h4 className="text-2xl text-neutralDGrey font-semibold">1,945,342</h4>
          <p className="font-medium">Payments</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4 ">
        <img src={member} alt="pic" />
        <div className="">
          <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,342</h4>
          <p className="font-medium">Members</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4 ">
        <img src={club} alt="pic" />
        <div className="">
          <h4 className="text-2xl text-neutralDGrey font-semibold">43,231</h4>
          <p className="font-medium">Clubs</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4 ">
        <img src={booking} alt="pic" />
        <div className="">
          <h4 className="text-2xl text-neutralDGrey font-semibold">1,232,322</h4>
          <p className="font-medium"> Bookings</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default About;
