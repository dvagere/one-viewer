import React from "react";

function ContactCard() {
  
  return (
    <div className='flex mt-2'>
        <img src="http://app.one-viewer.com/media/profile_img/BRIAN-ATCHISON-1.jpg" alt="" className='h-24'/>
        <ul className='text-white' style={{fontSize:"10px"}}>
            <li>BRIAN ATCHISON</li>
            <li>SALES DIRECTOR</li>
            <li>504-553-5106</li>
            <li className="cursor-pointer"><a href="mailto:batchison@westinneworleans.com" >EMAIL ME</a> </li>
            <li onClick={() => window.open("https://www.marriott.com/en-us/hotels/msywi-the-westin-new-orleans/overview/")} className="cursor-pointer">VISIT WEBSITE</li>
        </ul>
      </div>
  );
}
export default ContactCard;
