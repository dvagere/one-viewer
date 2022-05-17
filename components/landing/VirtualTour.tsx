import React from "react";
import Iframe from "react-iframe";

const VirtualTour = () => {
  return (
    <div className="rounded-xl border overflow-hidden ml-[18%] lg:w-[75%] xl:w-[80%] 2xl:w-[84%]">
      <div className="h-screen-NoScroll">
        <Iframe
          url="https://www.panowalks.com/embed/NyTKtEwqKIEz00OlNoNmzfud36OQ/"
          width="100%"
          height="100%"
          id="myId"
          className=""
          // display="initial"
          position="relative"
        />
      </div>
    </div>
  );
};

export default VirtualTour;
