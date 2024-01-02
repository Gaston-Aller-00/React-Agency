import { useEffect, useState } from "react";

type Props = {
  text: string;
};

const Navbar = ({ text }: Props) => {
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

  return (
  <div>
    Navbar {text}
    </div>)
};

export default Navbar;
