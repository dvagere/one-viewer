import * as React from "react";

const EventSvg = (props:any) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="calendarEventIconTitle"
    stroke="#fff"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    color="#000000"
    className="bi bi-badge-3d-fill"
    {...props}
  >
    <title id="calendarEventIconTitle">{"Calendar event"}</title>
    <path d="M3 5H21V21H3V5Z" />
    <path d="M21 9H3" />
    <path d="M7 5V3" />
    <path d="M17 5V3" />
    <rect x={15} y={15} width={2} height={2} />
  </svg>
);

export default EventSvg;