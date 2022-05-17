import Link from "next/link";
import React, { useState } from "react";
import ContactCard from "./ContactCard";
import SocialMedia from "./SocialMedia";
import StagSvg from "./SvgComponents/StagSvg";
import PlanSvg from "./SvgComponents/PlanSvg";
import PhotoSvg from "./SvgComponents/PhotoSvg";
import EventSvg from "./SvgComponents/EventSvg";
import VideoSvg from "./SvgComponents/VideoSvg";
import ModelSvg from "./SvgComponents/ModelSvg";
import SalesSvg from "./SvgComponents/SalesDeckSvg";
import WebsiteSvg from "./SvgComponents/WebsiteSvg";
import LocationSvg from "./SvgComponents/LocationSvg";
import SVGComponent from "./SvgComponents/SvgComponent";
import InstagramSvg from "./SvgComponents/InstagramSvg";
import sidebarStyles from "../../styles/sidebar.module.css";

function handleNav() {
  let sidebar = document.querySelector("aside.sidebareAside")?.classList.toggle("asideMinimize");
  let ssMIcon = document.querySelector("#showSideMinize")?.classList.toggle("ssMIcon");
  let extraHighScreen = document
    .querySelector(".h-screen-NoScroll")
    ?.parentElement?.classList.toggle("asideNavMinPage");
  console.log(sidebar);
  console.log(ssMIcon);
}

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="relative">
      <div onClick={handleNav} id="showSideMinize">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
        </svg>
      </div>
      <aside className="ml-[-100%] fixed z-10 top-0 mb-3 mt-5 pb-3 w-full flex flex-col sidebareAside justify-between h-screen border-r bg-zinc-800 rounded-xl transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[16%] sidebareAside">
        <div>
          <div className="mt-2 py-4 px-6">
            <Link href="/">
              <a href="#" title="home">
                <img
                  src="http://app.one-viewer.com/media/place_img/wi_logo_L.png"
                  className="w-full"
                  alt="tailus logo"
                />
              </a>
            </Link>
          </div>

          <div style={{ padding: "10px 33px", paddingTop: "0px" }}>
            <hr style={{ borderColor: "#47474e" }} />
          </div>

          <ul className="space-y-2 tracking-wide mt-1 px-4">
            <li className="px-2 hover:bg-sidebarBg rounded-xl rounded py-4">
              <Link href="/">
                <a
                  aria-label="Virtual tour"
                  className="relative flex items-center  p-1 text-white sideBar_column_gap px-4"
                >
                  <SVGComponent className="-ml-1 h-6 w-6 mr-2" />
                  <span className="-mr-1 font-medium group-hover:text-orange-400">
                    VIRTUAL TOUR
                  </span>
                </a>
              </Link>
            </li>
            <li className="px-2 hover:bg-sidebarBg rounded-xl rounded py-4">
              <a
                href="/photos"
                className=" flex items-center p-1 text-white sideBar_column_gap px-4"
              >
                <PhotoSvg className="-ml-1 h-6 w-6 mr-2" />
                <span className="group-hover:text-gray-700">PHOTO GALLERY</span>
              </a>
            </li>
            <li className="px-2 hover:bg-sidebarBg rounded-xl rounded py-4">
              <Link href="/video-gallery">
                <a className=" flex items-center p-1 text-white sideBar_column_gap px-4">
                  <VideoSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-orange-400">VIDEO GALLERY</span>
                </a>
              </Link>
            </li>
            <li className="px-2 hover:bg-sidebarBg rounded-xl rounded py-4">
              <Link href="/modeling">
                <a className=" flex items-center p-1 text-white sideBar_column_gap px-4">
                  <ModelSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">3D MODELLING</span>
                </a>
              </Link>
            </li>
            <li className="px-2 hover:bg-sidebarBg rounded-xl rounded py-4">
              <Link href="/stagging-options">
                <a className=" flex items-center p-1 text-white sideBar_column_gap px-4">
                  <StagSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">STAGING OPTIONS</span>
                </a>
              </Link>
            </li>
            <li className="px-2 hover:bg-sidebarBg rounded-xl rounded py-4">
              <Link href="/floor-plans">
                <a className=" flex items-center p-1 text-white sideBar_column_gap px-4">
                  <PlanSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">FLOOR PLANS</span>
                </a>
              </Link>
            </li>
            <li className="px-2 hover:bg-sidebarBg rounded-xl rounded py-4">
              <Link href="/sales-deck">
                <a className=" flex items-center p-1 text-white sideBar_column_gap px-4">
                  <SalesSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">SALES DECK</span>
                </a>
              </Link>
            </li>
            <li className="px-2 hover:bg-sidebarBg rounded-xl rounded py-4">
              <Link href="/event-enquiry">
                <a className=" flex items-center p-1 text-white sideBar_column_gap px-4">
                  <EventSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">EVENT ENQUIRY</span>
                </a>
              </Link>
            </li>
            <li className="px-2 hover:bg-sidebarBg rounded-xl rounded py-4">
              <Link href="/instagram">
                <a className=" flex items-center p-1 text-white sideBar_column_gap px-4 ">
                  <InstagramSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">INSTAGRAM</span>
                </a>
              </Link>
            </li>
            <li className="px-2 hover:bg-sidebarBg rounded-xl rounded py-4">
              <Link href="/map-directions">
                <a className=" flex items-center p-1 text-white sideBar_column_gap px-4">
                  <LocationSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">MAP/DIRECTIONS</span>
                </a>
              </Link>
            </li>
            <Link href="/website">
              <li className="px-2 hover:bg-sidebarBg rounded-xl rounded py-4">
                <a className=" flex items-center p-1 text-white sideBar_column_gap px-4 ">
                  <WebsiteSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">WEBSITE</span>
                </a>
              </li>
            </Link>
            <div style={{ padding: "10px 21px", paddingTop: "0px" }}>
              <hr style={{ borderColor: "#47474e" }} />
            </div>
            <li>
              <ContactCard />
            </li>
            <li className="px-4 pt-2">
              <SocialMedia />
            </li>
            <li className="pt-2">
              <div style={{ padding: "10px 21px ", paddingTop: "0px" }}>
                <hr style={{ borderColor: "#47474e" }} />
              </div>
            </li>
          </ul>
        </div>
        {
          <div className="px-6 -mx-6 flex justify-center items-center">
            <ul className="space-y-2 tracking-wide mt-1">
              <li>
                <a
                  onClick={() => window.open("https://one-viewer.com/ ")}
                  className=" flex items-center p-1 cursor-pointer"
                >
                  <img
                    style={{ width: "200px" }}
                    src="http://app.one-viewer.com/media/one-viewer-logo-BLUE-WHITE-v1.png"
                    alt="OneViewer"
                  />
                </a>
              </li>
            </ul>
          </div>
        }
      </aside>
    </div>
  );
};

export default SideBar;
