import React from 'react'
import { IconButton } from "@material-ui/core"

interface Props {
    plan: any[]
    defaultPlan?: any
  }
const MainPlan : React.FC<Props> = (props) =>  {
    const [currentPlan, setCurrentPlan] = React.useState(props.defaultPlan ?? props.plan[0])

  const findNextItem = () => {
    const ndx = props.plan.findIndex(item => item.url === currentPlan?.url)

    if(ndx >= 0){
      // Check if this is the last item and return the first item
      if(ndx >= props.plan.length - 1){
        return props.plan[0]
      }
      return props.plan[ndx + 1]
    }

    return props.plan[0]
  }
  const findPreviousItem = () => {
    const ndx = props.plan.findIndex(item => item.url === currentPlan?.url)

    if(ndx >= 0){
      // Check if this is the last item and return the first item
      if(ndx >= props.plan.length - 1){
        return props.plan[0]
      }
      return props.plan[ndx - 1]
    }

    return props.plan[0]
  }
  const handleNext = () => {
    setCurrentPlan(findNextItem())
  }
 
  const handlePrevious = () => {
    setCurrentPlan(findPreviousItem())
  }
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
      <IconButton onClick={handlePrevious}>
        <img src="/assets/previous.png" style={{width: "18px", height: "18px"}}/>
      </IconButton>
      <div style={{width: "100%",  height: "100%", padding: "1rem", display: "flex", justifyContent: "center"}}>
        <img src={currentPlan?.url} style={{borderRadius: "1rem", height: '100%'}} />
      </div>
      <IconButton onClick={handleNext}>
        <img src="/assets/next.png" style={{width: "18px", height: "18px"}}/>
      </IconButton>
    </div>
  )
}

export default MainPlan