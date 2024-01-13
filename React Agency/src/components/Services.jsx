import React from "react";
import memership from "../assets/icons/membership.png";
import association from "../assets/icons/association.png";
import clubs from "../assets/icons/group-club.png";
import company1 from "../assets/icons/company1.png";
import company2 from "../assets/icons/company2.png";
import company3 from "../assets/icons/company3.png";
import company4 from "../assets/icons/company4.png";
import company5 from "../assets/icons/company5.png";
import company6 from "../assets/icons/company6.png";

function Services() {
  const services = [
    {
      id: 1,
      tittle: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership of renewalds and payments",
      image: memership,
    },
    {
      id: 2,
      tittle: "National Associations",
      description:
        "Boost your online presence with cutting-edge web development. Responsive design, custom functionalities.",
      image: association,
    },
    {
      id: 3,
      tittle: "Clubs And Groups",
      description:
        "Secure your data with advanced encryption solutions. Protect your digital assets.",
      image: clubs,
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto " id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="font-semibold">
          We have been working with some fortune 500+ clients
        </p>
        {/* logo de las companias  */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={company1} alt="" />
          <img src={company2} alt="" />
          <img src={company3} alt="" />
          <img src={company4} alt="" />
          <img src={company5} alt="" />
          <img src={company6} alt="" />
        </div>
      </div>
      {/* card servicios */}
      <div className="mt-20 md:w-1/2 mx-auto text-center mb-12">
        <h2 className="text-4xl text-neutralDGrey font-semibold ">
          Manage your community in a single system
        </h2>
        <p className="font-semibold mt-4"> Who is nexcent suitable for? </p>
      </div>
      {/* card */}
      <div className="mt-32 grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 md:w-11/12 mx-auto gap-14">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px]
        mx-auto md:h-80 rounded-md card flex item-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.tittle}</h4>
              <p className="text-sm text-neutralDGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
