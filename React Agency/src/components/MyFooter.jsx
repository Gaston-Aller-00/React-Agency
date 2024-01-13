import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../assets/logo.png";
const MyFooter = () => {
  return (
    <Footer container className="bg-gray-200">
      <div className="w-full">
        <div
          className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1"
          id="faq"
        >
          <div>
            <Footer.Brand href="/" src={logo} alt="Nexcent" name="Nexcent" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="green">
                  Nexcent
                </Footer.Link>
                <Footer.Link href="#" className="green">
                  Nexcent App
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="green">
                  Github
                </Footer.Link>
                <Footer.Link href="#" className="green">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="green">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className="green">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Nexcent™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" className="green" icon={BsFacebook} />
            <Footer.Icon href="#" className="green" icon={BsInstagram} />
            <Footer.Icon href="#" className="green" icon={BsTwitter} />
            <Footer.Icon href="#" className="green" icon={BsGithub} />
            <Footer.Icon href="#" className="green" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
