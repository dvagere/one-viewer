import React, { FC, useState } from "react";
import Link from 'next/link';
import { SidebarItem } from "./models/SidebarItem";

type SidebarLinkProps = {
  item: SidebarItem;
};

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
        <li className="px-2 hover:bg-sidebarBg rounded-xl rounded py-3">
          <Link href={item.path}>
          <a
            className="relative flex items-center rounded-xl py-1 text-white hover:bg-gray-600 rounded hover:text-brown"
            
            onClick={showSubnav}
          >
            {item.icon}
            <span className="-mr-1 font-medium group-hover:text-orange-400">{item.title}</span>
          </a>
          </Link>
        </li>
      {subnav &&
        item?.subnav?.map((subnavItem, index) => {
          return (
            <a href={subnavItem.path} key={index} className="relative flex items-center rounded-xl text-white pl-5">
              {subnavItem.icon}
              <li className="">{subnavItem.title}</li>
            </a>
          );
        })}
    </>
  );
};

export default Submenu;
