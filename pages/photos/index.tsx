import React from "react";
import VideoGallery from "../../components/landing/VideoGallery";
import SideBar from "../../components/widgets/SideBar";
import styles from "../../styles/Home.module.css";
import Gallery from "../../components/widgets/Gallery";

const index = () => {
  return (
    <div className={styles.container}>
      <div className="mt-5 pb-0 mb-0">
        <SideBar />
        <div className="rounded-xl border overflow-hidden ml-[18%] lg:w-[75%] xl:w-[80%] 2xl:w-[84%]">
          <div className="h-screen-NoScroll" style={{ background: "#27272A" }}>
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
