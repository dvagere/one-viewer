import React from 'react'
import { Grid } from "@material-ui/core"

interface Props {
    plan: any[]
  }
const StandardPlan: React.FC<Props> = (props) => {
  return (
    <Grid container>
      {
        props.plan?.map(item => {
          return (
            <Grid item xs={12} sm={6} lg={3} xl={2} style={{padding: "1rem"}}>
              <div style={{width: "100%", height: "100%"}}>
                <img src={item.url} style={{width: "100%", height: "100%", borderRadius: "5px"}} />
              </div>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default StandardPlan