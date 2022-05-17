import React from 'react';
import VideoGallery from '../../components/landing/VideoGallery'
import SideBar from '../../components/widgets/SideBar';
import styles from '../../styles/Home.module.css'


const index = () => {
  return (
    <div className={styles.container}>
            <div className="mb-3 mt-3 pb-5">
                <SideBar />
                <VideoGallery />
            </div>
        </div>
  )
}

export default index