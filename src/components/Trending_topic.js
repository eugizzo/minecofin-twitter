import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import SiderBar from "./SiderBar";
import InfoDropdown from "../components/layout/InfoDropdown";
import LineChartData from "./LineChartData";

const Trending_topic = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <div className=" flex p-0 ">
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <SiderBar />
      </div>

      <div className={`content ${isOpen ? "open" : ""}`}>
        {/* nav Start */}
        <nav className="navbar bg-white   px-2 py-3">
          <div className="p-2 flex">
            <a href="#" className="flex-shrink-0">
              <FaBars onClick={toggleSidebar} />
            </a>
            <p className="pl-8 text-[15px] text-black font-bold">
              Trending Topics
            </p>
          </div>

          <div className="nav-item mr-8">
            <div className="">
              <InfoDropdown />
            </div>
          </div>
        </nav>
        {/* Navbar End */}

        <div className="container-fluid pt-3 px-2 z-30">
          <div className="col-sm-12 shadow rounded col-xl-12  pr-8 pb-4 pt-8 pl-8 pr-8 ">
            <LineChartData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending_topic;
