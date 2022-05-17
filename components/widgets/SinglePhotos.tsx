import { IconButton } from "@material-ui/core"
import React from "react"

// import Grid from "@material-ui/core/Grid"

interface Props {
  photos: any[]
  defaultPhoto?: any
}

const SinglePhotos: React.FC<Props> = (props) => {

  const [currentPhoto, setCurrentPhoto] = React.useState(props.defaultPhoto ?? props.photos[0])

  const findNextItem = () => {
    const ndx = props.photos.findIndex(item => item.url === currentPhoto?.url)

    if(ndx >= 0){
      // Check if this is the last item and return the first item
      if(ndx >= props.photos.length - 1){
        return props.photos[0]
      }
      return props.photos[ndx + 1]
    }

    return props.photos[0]
  }

  const findPreviousItem = () => {
    const ndx = props.photos.findIndex(item => item.url === currentPhoto?.url)

    if(ndx >= 0){
      // Check if this is the last item and return the first item
      if(ndx >= props.photos.length - 1){
        return props.photos[0]
      }
      return props.photos[ndx - 1]
    }

    return props.photos[0]
  }

  const handleNext = () => {
    setCurrentPhoto(findNextItem())
  }
 
  const handlePrevious = () => {
    setCurrentPhoto(findPreviousItem())
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
      <IconButton onClick={handlePrevious}>
        <img src="/assets/previous.png" style={{width: "18px", height: "18px"}}/>
      </IconButton>
      <div style={{width: "100%",  height: "100%", padding: "4rem", display: "flex", justifyContent: "center"}}>
        <img src={currentPhoto?.url} style={{borderRadius: "1rem", height: '100%'}} className="border-8 border-white-600 shadow-inner"/>
      </div>
      <IconButton onClick={handleNext}>
        <img src="/assets/next.png" style={{width: "18px", height: "18px"}}/>
      </IconButton>
    </div>
  )
}

export default SinglePhotos 