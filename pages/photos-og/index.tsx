import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import SideBar from "../../components/widgets/SideBar";
import VirtualTour from "../../components/landing/VirtualTour";
import Gallery from "../../components/widgets/Gallery";

interface Props {}

const Photos: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <SideBar />
        </div>
        <div data-shamim="jani" style={{ flex: 3, height: "100vh", width: "100%" }}>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Photos;
