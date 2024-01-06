import React from "react";

function Services() {
  const services = [
    {
      id: 1,
      tittle: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership of renewalds and payments",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 2,
      tittle: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership of renewalds and payments",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 3,
      tittle: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership of renewalds and payments",
      image: "/src/assets/icons/membership.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto ">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p>We have been working with some fortune 500+ clients</p>
        {/* logo de las companias  */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="/src/assets/icons/company1.png" alt="" />
          <img src="/src/assets/icons/company2.png" alt="" />
          <img src="/src/assets/icons/company3.png" alt="" />
          <img src="/src/assets/icons/company4.png" alt="" />
          <img src="/src/assets/icons/company5.png" alt="" />
          <img src="/src/assets/icons/company6.png" alt="" />
        </div>
      </div>
      {/* card servicios */}
      <div className="mt-20 md:w-1/2 mx-auto text-center mb-12">
        <h2 className="text-4xl text-neutralDGrey font-semibold ">
          Manage your community in a single system
        </h2>
        <p className="text-neutralDGrey"> Who is nexcent suitable for? </p>
      </div>
      {/* card */}
      <div  className="mt-32 grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 md:w-11/12 mx-auto gap-14">
        {services.map(service =>  <div key={service.id} className="px-4 py-8 text-center md:w-[300px]
        mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex item-center justify-center h-full">
            <div>
                <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"><img src={service.image} alt="" className="-ml-5" /></div>
                <h4 className="text-2xl font-bold">{service.tittle}</h4>
                <p className="text-sm text-neutralDGrey">{service.description}</p>
            </div>
        </div> )}

      </div>
    </div>
  );
}

export default Services;
