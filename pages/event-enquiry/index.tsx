import React from "react";
import EventEnquiry from "../../components/landing/EventEnquiry";
import SideBar from "../../components/widgets/SideBar";
import styles from '../../styles/Home.module.css'

const EventEnquiryPage =()=>{
    return(
        <div className={styles.container}>
            <div className="mb-3 mt-3 pb-5">
            <SideBar/>
            <EventEnquiry/>
        </div>
        </div>
    )
}
export default EventEnquiryPage