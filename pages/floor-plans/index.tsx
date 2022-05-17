import React from "react";
import styles from "../../styles/Home.module.css";
import FloorPlan from "../../components/landing/FloorPlan";
import SideBar from "../../components/widgets/SideBar";
interface Props {}

const FloorPlans: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className="mb-3 mt-3 pb-5">
        <SideBar />
        <div className="rounded-xl border overflow-hidden  h-screen ml-[17%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <div className="h-screen" style={{ background: "#27272A" }}>
            <FloorPlan />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;
