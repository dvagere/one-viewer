import React from 'react'
import Grid from "@material-ui/core/Grid"

interface Props {
  plan: any[]
}
const MinimalPlan: React.FC<Props> = (props) => {
  return (
    <Grid container>
      {
        props.plan?.map(item => {
          return (
            <Grid item xs={12} sm={6} lg={4} style={{padding: "1rem"}}>
              <div style={{width: "100%", height: "70%"}}>
                <img src={item.url} style={{width: "100%", height: "100%", borderRadius: "5px"}} />
              </div>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default MinimalPlan