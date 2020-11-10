import React, {Fragment} from 'react'
import {GoogleMap, Marker, InfoWindow, useLoadScript} from "@react-google-maps/api"
import Spinner from "./spinner"

// set map container size
const containerStyle = {
    width: '100%',
    height: '40vh'
  };

const SingleRequestMap = () => {

    // pass google map api key to load the Google Maps script
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY })

    // make api call to backend to get requests details and location
    const place = {lat: 9.0820,lng: 8.6753};
    
const displayMap = () => {
    return (
        <Fragment>
            <GoogleMap mapContainerStyle={containerStyle} center={place} zoom={9}>
                    <Marker position={place}>
                    <InfoWindow>
                        <div>
                            <h5 className="map-req-title">I need a blanket for this weather</h5>
                            <p className="map-req-type">Type: Material</p>
                            <p className="map-req-by">Request by: Chinedu Emesue</p>
                        </div>
                    </InfoWindow>
                    </Marker>
            </GoogleMap>
        </Fragment>
    )
    }
    return isLoaded ? displayMap() : <Spinner />
}

export default SingleRequestMap