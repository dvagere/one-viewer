import React from "react";
import SalesDeck from "../../components/landing/SalesDeck";
import SideBar from "../../components/widgets/SideBar";
import styles from "../../styles/Home.module.css";

const SalesDeckPage = () => {
  return (
    <div className={styles.container}>
      <div className="mb-3 mt-3 pb-5">
        <SideBar />
        <SalesDeck />
      </div>
    </div>
  );
};
export default SalesDeckPage;
