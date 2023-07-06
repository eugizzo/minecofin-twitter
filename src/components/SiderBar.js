import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import logo from "../assets/logo/gov_logo.png";
import { Link } from "react-router-dom";
import "./Tab.css";
import { SidebarData } from "./SidebarData";

const SiderBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(
    Array(SidebarData.length).fill(true)
  );
  const [activeSubNav, setActiveSubNav] = useState(1);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  const toggleMenu = (e, index) => {
    e.preventDefault();
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  return (
    <nav
      className="navbar pt-2 bg-[#078ECE] w-[240px]"
      style={{ height: "100vh" }}
    >
      <div className="fixed bg-white w-[250px] z-40 top-0 pt-2  ">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            className="w-8 flex justify-center "
            alt="aims logo"
          />
        </div>
        <div className=" mb-2 flex justify-center items-center">
          <h1 className="text-[#078ECE] pl-2  font-bold">MINECOFIN</h1>
        </div>
      </div>
      <div className=" ms-4 mb-8">
        <div className="navbar-nav w-100 mt-2 z-30 h-[510px]">
          {SidebarData.map((item, index) => {
            return (
              <div className="nav-item dropdown pt-2" key={index}>
                <div
                  className={`flex justify between ${
                    activeSubNav === index + 2 ? "NavActive" : ""
                  }`}
                  onClick={(e) => toggleMenu(e, index)}
                >
                  <div className="pt-[10px]  text-white">{item.icon}</div>
                  <a
                    href="#"
                    onClick={() => setActiveSubNav(index + 1)}
                    className={`nav-link text-black flex text-[14px] font-bold w-1/2 ${
                      activeSubNav === index + 1 ? "NavActive" : ""
                    }`}
                  >
                    <div className="text-white text-[15px]">{item.title}</div>
                  </a>
                  <span
                    className="mt-2 w-1/2 pl-[60px]"
                    onClick={(e) => toggleMenu(e, index)}
                  >
                    <FaAngleDown className="text-sm text-white" />
                  </span>
                </div>
                {isOpen ? (
                  <div
                    className={`dropdown-menu  pt-[2px] bg-transparent border-0 ${
                      dropdownOpen[index] ? "show" : ""
                    }`}
                  >
                    {item.subNav &&
                      item.subNav.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          onClick={() => setActiveSubNav(index + 1)}
                          className={`pl-[25px] text-[14px] ${
                            activeSubNav === index + 1 ? "NavActive" : ""
                          }`}
                        >
                          <div className="flex">
                            <div className="pr-2 pt-[10px] text-white">
                              {" "}
                              {subItem.icon}
                            </div>
                            <Link to={subItem.path}>
                              <div className="pt-2 group transition-colors duration-900 hover:text-white text-white  hover:font-bold ">
                                {" "}
                                {subItem.title}
                              </div>
                            </Link>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SiderBar;
