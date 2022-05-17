import React from "react";

function SalesDeck() {
  return (
    <div className="rounded-xl border overflow-hidden ml-[17%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div className="h-screen">
      <object
        data="http://app.one-viewer.com/media/Sales%20Deck.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
    </div>
  );
}

export default SalesDeck;
