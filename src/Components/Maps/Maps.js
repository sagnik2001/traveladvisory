import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Typography,Paper,useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'
import useStyles from "./styles.js"
const Maps = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  const coordinates = {
  lat: 0.0, lng: 0.0
  }
  return (
    <div className={classes.mapcontainer}>
         <GoogleMapReact
           bootstrapURLKeys={{key: 'AIzaSyB0K0MN98zcl8vf_Y2bfm7543idSmYeZpc'}}
           defaultCenter={coordinates}
           center={coordinates}
           defaultZoom={14}
           margin={[50,50,50,50]}
           options={''}
           onChange={''}
           onChildClick={''}
           ></GoogleMapReact>
    </div>
  )
}

export default Maps
