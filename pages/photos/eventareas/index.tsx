import React from 'react';
import VideoGallery from '../../../components/landing/VideoGallery'
import SideBar from '../../../components/widgets/SideBar';
import styles from '../../../styles/Home.module.css'
import Gallery from '../../../components/widgets/Gallery';


const index = () => {
  return (
    <div className={styles.container}>
            <div className="mb-3 mt-3 pb-5">
                <SideBar />
                <div className='rounded-xl border overflow-hidden  h-full ml-[17%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'>
                  <div className="h-screen" style={{background: "#27272A"}}>
                    <Gallery />
                  </div>
                </div>
            </div>
        </div>
  )
}

export default index