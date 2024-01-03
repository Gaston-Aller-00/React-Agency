import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";


const NavBar = () => {
  // states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // clean del evento
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //array del nav
  const navItems = [
    { link: "Inicio", path: "home" },
    { link: "Servicio", path: "service" },
    { link: "Acerca", path: "about" },
    { link: "Producto", path: "product" },
    { link: "Testimonio", path: "testimonial" },
    { link: "Preguntas Frecuentes", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav>
        <div>
          <a href="" className="text-2xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-[#263238]">NEXCENT</span>
          </a>

          {/* nav for large */}

          <ul className="md:flex space-x-12 hidden">
            {
              navItems.map(({link,path}) => <Link key={path} spy={true} smooth={true} offset={-100}  to={path} className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">{link}</Link>)
            }
          </ul>

              {/* btn for large moviles */}

              <div className="space-x-12 hidden lg:flex items-center ">
                  <a href="" className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900">Login</a>
                  <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey ">Sign up</button>
              </div>

            {/* menu btn for mobile */}
            <div className="">

            </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
