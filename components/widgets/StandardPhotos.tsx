import { Grid } from "@material-ui/core"
import React from "react"

interface Props {
  photos: any[]
}

const StandardPhotos: React.FC<Props> = (props) => {

  return (
    <Grid container>
      {
        props.photos?.map(item => {
          return (
            <Grid item xs={12} sm={6} lg={3} xl={2} style={{padding: "1rem"}}>
              <div style={{width: "100%", height: "100%"}} className="shadow-bottom">
                <img src={item.url} style={{width: "100%", height: "100%", borderRadius: "5px"}} className="border-8 border-white-600"/>
              </div>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default StandardPhotos