import React from 'react'
import Iframe from 'react-iframe';

 function StaggingOptions() {
  return (
    <div className=" rounded-xl border overflow-hidden ml-[17%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="h-screen">
      <Iframe
              url="https://vr.visrez.com/the-boca-raton/grand-ballroom/#empty"
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
export default StaggingOptions