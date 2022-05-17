import React from 'react';
import Iframe from 'react-iframe';


const Modeling = () => {
  return (
   
    <div className="rounded-xl border overflow-hidden ml-[17%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div className="h-screen">
    <Iframe
            url="https://build.visrez.com/?/share/95a60e64-b0e6-4b0b-a533-bde58963b4c1"
            width="100%"
            height="100%"
            id="myId"
            className=""
            // display="initial"
            position="relative"
          />
    </div>
  </div>
  )
}

export default Modeling
