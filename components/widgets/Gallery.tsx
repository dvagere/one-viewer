import React from "react";
import MinimalPhotos from "./MinimalPhotos";
import SinglePhotos from "./SinglePhotos";
import StandardPhotos from "./StandardPhotos";

import IconButton from "@material-ui/core/IconButton";

interface Props {}

const testImages = [
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-1.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-2.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-3.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-4.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-5.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-6.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-1.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-2.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-3.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-4.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-5.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-6.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-1.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-2.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-3.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-4.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-5.jpg",
  },
  {
    url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/event-areas/thumbs/Westin-Event-Photo-6.jpg",
  },
];

const Gallery: React.FC<Props> = (props) => {
  const [tab, setTab] = React.useState("minimal");

  const [photos, setPhotos] = React.useState(testImages);

  const handleChange = (value: string) => {
    setTab(value);
  };

  const getGalleryLayout = () => {
    switch (tab) {
      case "minimal":
        return <MinimalPhotos photos={photos} />;
      case "standard":
        return <StandardPhotos photos={photos} />;
      case "single":
        return <SinglePhotos photos={photos} />;
      default:
        return;
        break;
    }
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="iconButtonGroup">
        <IconButton
          onClick={() => {
            handleChange("minimal");
          }}
        >
          <img src="/assets/grid4.png" className="iconbuttonDG" />
        </IconButton>
        <IconButton
          onClick={() => {
            handleChange("standard");
          }}
        >
          <img src="/assets/grid9.png" className="iconbuttonDG" />
        </IconButton>
        <IconButton
          onClick={() => {
            handleChange("single");
          }}
        >
          <img src="/assets/grid1.png" className="iconbuttonDG" />
        </IconButton>
      </div>
      <div
        className="galleryLayoutScroll"
        style={{ height: "100%", width: "100%", overflow: "auto", padding: "0px 47px" }}
      >
        {getGalleryLayout()}
      </div>
    </div>
  );
};

export default Gallery;
