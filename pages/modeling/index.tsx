import React from "react";
import Modeling from "../../components/landing/Modeling";
import SideBar from "../../components/widgets/SideBar";
import styles from '../../styles/Home.module.css'
const ModellingPage =() =>{
    return(
        <div className={styles.container}>
            <div className="mb-3 mt-3 pb-5">
                <SideBar/>
                <Modeling/>
            </div>
        </div>
    )
}
export default ModellingPage