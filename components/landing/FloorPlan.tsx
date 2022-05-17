import React from 'react'
import StandardPlan from './StandardPlan'
import MinimalPlan from './MinimalPlan'
import MainPlan from './MainPlan'

import IconButton from "@material-ui/core/IconButton"


interface Props {

}
const testPlans = [
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-3.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-11.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-12.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-3.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-11.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-12.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-3.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-11.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-12.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-3.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-11.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-12.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-3.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-11.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-12.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-3.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-11.jpg"},
    {url: "http://app.one-viewer.com/static/galleries/WestinNewOrleans/floorplans/thumbs/Floorplan-12.jpg"},
  ]
const FloorPlan:React.FC<Props> = (props) => {
    const [tab, setTab] = React.useState("minimal")

    const [plan, setPlan] = React.useState(testPlans)
  
    const handleChange  = (value: string) => {
      setTab(value)
    }
    const getPlanLayout = () => {
        switch (tab) {
          case "minimal":
            return <MinimalPlan plan={plan} />;
          case "standard":
            return <StandardPlan plan={plan} />;
          case "single":
            return <MainPlan plan={plan} />;
          default:
            return ;
            break;
        }
      }
    
  return (
    <div style={{width:  "100%", height: "100%"}}>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
      <IconButton onClick={() =>  {handleChange("minimal")}}>
          <img src="/assets/grid4.png" style={{width: "16px", height: "16px"}}/>
        </IconButton>
        <IconButton onClick={() =>  {handleChange("standard")}}>
          <img src="/assets/grid9.png" style={{width: "16px", height: "16px"}}/>
        </IconButton>
        <IconButton onClick={() =>  {handleChange("single")}}>
          <img src="/assets/grid1.png" style={{width: "18px", height: "18px"}}/>
        </IconButton>
      </div>
      <div style={{height: "100%", width: "100%", overflow: "auto"}}>
        { getPlanLayout() }
      </div>
    </div>
  )
}

export default FloorPlan