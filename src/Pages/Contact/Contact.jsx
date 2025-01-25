import React from "react";
import Header from "../../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faClock, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="lg:h-screen w-full bg-gray-300 pb-10">
      <Header />
      <div className="rounded-xl w-[90%] h-[80%] mx-auto flex mt-20 shadow-lg shadow-black relative flex-col lg:flex-row gap-6 bg-white lg:bg-transparent lg:gap-0">
        <div className="lg:w-3/4 h-full bg-white w-full">
          <div className="flex flex-col  lg:w-[40%]  lg:ml-20 lg:mt-10 gap-4 p-10 lg:p-0">
            <h1 className="text-5xl font-semibold">Contact Me</h1>
            <p className="text-lg">
              Feel free to contact me at any time. I will get back to you as
              soon as I can{" "}
            </p>
            <form action="#">
              <input
                type="text"
                placeholder="Name"
                className="border-b w-full border-gray-400 placeholder:text-black pb-3 block mb-10"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b w-full border-gray-400 placeholder:text-black pb-3 block mb-10"
              />
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="border-b w-full border-gray-400 placeholder:text-black  block mb-10"
              ></textarea>
              <input
                type="submit"
                value="SEND"
                className=" bg-[#469] text-white w-full py-2 rounded-md hover:bg-[#111a38] font-semibold hover:transition-all hover:duration-300 hover:ease-in-out"
              />
            </form>
          </div>
        </div>
        <div className="lg:w-1/4 h-full bg-[#111a38] w-full lg:block flex ">
          <div className="lg:h-[70%] lg:w-[50%]  lg:absolute lg:right-0 lg:top-12 bg-[#469] text-white ps-10 flex flex-col justify-center py-5 lg:py-0">
            <p className="text-3xl font-bold mb-7">Info</p>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 flex-wrap">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl hover:text-[#111a38]" />
                <p>
                  <a href="mailto:opemipogundipe@gmail.com" className="hover:text-[#111a38] hover:underline">
                    opemipogundipe@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <FontAwesomeIcon icon={faPhone} className="text-xl hover:text-[#111a38] " />
                <p>
                  <a href="tel:+2347019436201" target="_self" className="hover:text-[#111a38] hover:underline">
                    +2347019436201
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <FontAwesomeIcon icon={faMapMarkedAlt} className="text-xl hover:text-[#111a38]" />
                <p className="hover:text-[#111a38] hover:underline" >Lagos, Nigeria</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <FontAwesomeIcon icon={faClock} className="text-xl hover:text-[#111a38]" />
                <p className="hover:text-[#111a38] hover:underline" >9:00am - 10:00pm (WAT)</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[25%] lg:h-[15%]  w-1/2 lg:absolute bottom-0 text-white flex items-center justify-center gap-12 text-xl flex-col md:flex-row">
            <div>
              <p>
                <a
                  href="https://www.linkedin.com/in/naomi-ogundipe-a4667b333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_self" className="hover:text-[#469]"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href="https://github.com/Nayomiee" target="_self" className="hover:text-[#469]">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram}  target="_self" className="hover:text-[#469]" />
                </a>
              </p>
            </div>
            <div>
              <p>
                <a href="http://wa.me/2347019436201">
                  <FontAwesomeIcon icon={faWhatsapp}  target="_self" className="hover:text-[#469]"/>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
