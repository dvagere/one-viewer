import React from "react";
import Iframe from "react-iframe";

const MapDirections = () => {
  return (
    <div className='rounded-xl border overflow-hidden  h-screen ml-[17%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'>
      <div className="h-screen">
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.9710794169446!2d-90.06680578488708!3d29.951510481916255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a612b1956f51%3A0x10a0c5e3d5458ce2!2sThe Westin New Orleans!5e0!3m2!1sen!2ssg!4v1637479487039!5m2!1sen!2ssg" 
         width="100%"
         height="100%"
         position="relative"
        />
      </div>
    </div>
  );
};

export default MapDirections;
