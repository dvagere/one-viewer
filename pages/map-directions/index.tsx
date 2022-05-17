import { Head } from 'next/document';
import React from 'react';
import MapDirections from '../../components/landing/MapDirections';
import SideBar from '../../components/widgets/SideBar';
import styles from '../../styles/Home.module.css'


const MapDirectionsPage = () => {
  return (
    <div className={styles.container}>

      <div className="mb-3 mt-3 pb-5">
        <SideBar />

        <MapDirections />
      </div>
    </div>
  )
}

export default MapDirectionsPage
