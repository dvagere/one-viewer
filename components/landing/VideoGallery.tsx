import React from 'react';
import Iframe from "react-iframe";


const VideoGallery = () => {
  return (
    <div className='rounded-xl border overflow-hidden  h-screen ml-[17%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'>
      <div className="h-screen">
        <Iframe url="https://www.youtube.com/embed/gf29gcm_Cvw" 
         width="100%"
         height="100%"
         position="relative"
         allow="autoplay"
        />
      </div>
    </div>
  )
}

export default VideoGallery;
