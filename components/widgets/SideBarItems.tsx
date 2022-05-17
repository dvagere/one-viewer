import { SidebarItem } from "./models/SidebarItem";
import EventSvg from "./SvgComponents/EventSvg";
import InstagramSvg from "./SvgComponents/InstagramSvg";
import LocationSvg from "./SvgComponents/LocationSvg";
import ModelSvg from "./SvgComponents/ModelSvg";
import PhotoSvg from "./SvgComponents/PhotoSvg";
import PlanSvg from "./SvgComponents/PlanSvg";
import SalesSvg from "./SvgComponents/SalesDeckSvg";
import StagSvg from "./SvgComponents/StagSvg";
import SVGComponent from "./SvgComponents/SvgComponent";
import VideoSvg from "./SvgComponents/VideoSvg";
import WebsiteSvg from "./SvgComponents/WebsiteSvg";
import {MdOutlineSubdirectoryArrowRight} from 'react-icons/md'


export const SidebarData: SidebarItem[] = [
  {
    icon: <SVGComponent className="-ml-1 h-6 w-6 mr-2" />,
    title: "VIRTUAL TOUR",
    path: "/",
  },
  {
    icon:<PhotoSvg className="-ml-1 h-6 w-6 mr-2" /> ,
    title: "PHOTO GALLERY",
    path: "",

    subnav: [
      {
        icon: <MdOutlineSubdirectoryArrowRight/>,
        title: "EVENT AREAS",
        path: "/photos/eventareas",
        
      },
      {
        icon: <MdOutlineSubdirectoryArrowRight/>,
        title: "GUEST ROOMS",
        path: "/photos/guestrooms",
        
      },
      {
        icon: <MdOutlineSubdirectoryArrowRight/>,
        title: "HOTEL VIEWS",
        path: "/photos/hotelrooms",
        
      },
    ],
  },
  {
    icon: <VideoSvg className="-ml-1 h-6 w-6 mr-2" />,
    title: "VIDEO GALLERY",
    path: "",

    subnav: [
      {
        icon: <MdOutlineSubdirectoryArrowRight/>,
        title: "OVERVIEW",
        path: "/video-gallery/overview",
        
      },
      {
        icon: <MdOutlineSubdirectoryArrowRight/>,
        title: "WEDDINGS",
        path: "/video-gallery/weddings",
      },
      {
        icon: <MdOutlineSubdirectoryArrowRight/>,
        title: "THINGS TO DO",
        path: "/video-gallery/thingstodo",
      },
    ],
  },
  {
    icon: <ModelSvg className="-ml-1 h-6 w-6 mr-2" />,
    title: "3D MODELLING",
    path: "/modeling",
  },
  {
    icon: <StagSvg className="-ml-1 h-6 w-6 mr-2" />,
    title: "STAGING OPTIONS",
    path: "/staging-options",
  },
  {
    icon: <PlanSvg className="-ml-1 h-6 w-6 mr-2" />,
    title: "FLOOR PLANS",
    path: "/floor-plans",
  },
  {
    icon: <SalesSvg className="-ml-1 h-6 w-6 mr-2" />,
    title: "SELLS DECK",
    path: "/sells-deck",
  },
  {
    icon: <EventSvg className="-ml-1 h-6 w-6 mr-2" />,
    title: "EVENT ENQUIRY",
    path: "/event-enquiry",
  },
  {
    icon: <InstagramSvg className="-ml-1 h-6 w-6 mr-2" />,
    title: "INSTAGRAM",
    path: "/instagram",
  },
  {
    icon: <LocationSvg className="-ml-1 h-6 w-6 mr-2" />,
    title: "MAP/DIRECTIONS",
    path: "/map-directions",
  },
  {
    icon:<WebsiteSvg className="-ml-1 h-6 w-6 mr-2" />,
    title: "WEBSITE",
    path: "the url",
  },
];
