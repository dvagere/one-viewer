import React from "react";
import Grid from "@material-ui/core/Grid";

interface Props {
  photos: any[];
}

const MinimalPhotos: React.FC<Props> = (props) => {
  return (
    <Grid container>
      {props.photos?.map((item) => {
        return (
          <Grid item xs={12} sm={6} lg={4} className="globalImageGall">
            <div style={{ width: "100%", height: "100%" }}>
              <img src={item.url} className="grid_image_size" />
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MinimalPhotos;
