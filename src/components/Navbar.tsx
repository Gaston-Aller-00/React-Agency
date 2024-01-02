import { useEffect, useState } from "react";
import logo from "../assets/logo.png"
import "../App.css"
import "../index.css"
//tipados de las props y el array nav
// type Props = {
//   text: string;
// };

type navItems = {
  link: string;
  path: string;
}

const Navbar = () => {
  const [isMenuopen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  //set toggle menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuopen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  },[]);

  //nav items array fresh fresh
  const navItems: navItems[] = [
    { link: "Home", path: "home" },
    { link: "Servcice", path: "servcice" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "FAQ", path: "faq" },
  ];
  
  return (
    <header className={`w-full ${isSticky ? "bg-white" : "bg-transparent"} fixed top-0 left-0 right-0`}>
      <nav className="flex justify-between items-center p-4">
        <div className="text-2xl font-semibold flex items-center space-x-3">
          <img src={logo} alt="Logo" />
          <span className="text-[#263238]">NEXCENT</span>
        </div>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <a href={`/${item.path}`} className="text-gray-700 hover:text-black">{item.link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
