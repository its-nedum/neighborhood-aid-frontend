import React, {Fragment} from 'react'
import {GoogleMap, Marker, InfoWindow, useLoadScript} from "@react-google-maps/api"
import Spinner from "./spinner"
import moment from "moment"

// set map container size
const containerStyle = {
    width: '100%',
    height: '50vh'
  };

const SingleRequestMap = ({request}) => {

    // pass google map api key to load the Google Maps script
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY })

    // make api call to backend to get requests details and location
    const place = {
        lat: request.lat,
        lng: request.lng
    };
    
const displayMap = () => {
    return (
        <Fragment>
            <GoogleMap mapContainerStyle={containerStyle} center={place} zoom={9}>
                     {/* request.reqtype === 'Material need' */}
                    {request.reqtype === 'material' ?
                        <Marker 
                            position={place}
                            icon={`https://maps.google.com/mapfiles/kml/pushpin/grn-pushpin.png`}
                            >
                            <InfoWindow>
                                <div>
                                    <h6 className="text-left map-req-title">{request.title}</h6>
                                    <p className="text-left"><i>{request.address}</i></p>
                                    <p className="text-left map-req-by">{`${request.user.firstname} ${request.user.lastname}`}</p>
                                    <div className="d-flex justify-content-between">
                                        <p className="map-req-type"><strong>Type:</strong> {request.reqtype}</p>
                                        { request.status === 0 ? 
                                            <p className="map-req-type"><strong>Status: </strong><span className="text-danger">Unfulfilled</span></p>
                                        : 
                                            <p className="map-req-type"><strong>Status: </strong><span className="text-success">Fulfilled</span></p>
                                        } 
                                    </div>
                                    <p className="text-left">{request.description}</p>
                                    <p className="about-req-created"><strong>Created at:</strong> {moment(request.created_at).format('LLLL')}</p>
                                </div>
                            </InfoWindow>
                        </Marker>
                    :
                        <Marker 
                            position={place}
                            icon={`https://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png`}
                            >
                            <InfoWindow>
                                <div>
                                    <h6 className="text-left map-req-title">{request.title}</h6>
                                    <p className="text-left"><i>{request.address}</i></p>
                                    <p className="text-left map-req-by">{`${request.user.firstname} ${request.user.lastname}`}</p>
                                    <div className="d-flex justify-content-between">
                                        <p className="map-req-type"><strong>Type:</strong> {request.reqtype}</p>
                                        { request.status === 0 ? 
                                            <p className="map-req-type"><strong>Status: </strong><span className="text-danger">Unfulfilled</span></p>
                                        : 
                                            <p className="map-req-type"><strong>Status: </strong><span className="text-success">Fulfilled</span></p>
                                        } 
                                    </div>
                                    <p className="text-left">{request.description}</p>
                                    <p className="about-req-created"><strong>Created at:</strong> {moment(request.created_at).format('LLLL')}</p>
                                </div>
                            </InfoWindow>
                        </Marker>
                    }
                    
            </GoogleMap>
        </Fragment>
    )
    }
    return isLoaded ? displayMap() : <Spinner />
}

export default SingleRequestMap