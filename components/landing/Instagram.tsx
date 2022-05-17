import React from 'react'
import Iframe from "react-iframe";

function Instagram() {
  return (
    <div className='rounded-xl border overflow-hidden  h-screen ml-[17%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'>
      <div className="h-screen">
        <Iframe url="https://widget.tagembed.com/28210?wix" 
         width="100%"
         height="100%"
         position="relative"
        />
      </div>
    </div>
  )
}

export default Instagram