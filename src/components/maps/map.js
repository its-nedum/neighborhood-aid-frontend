import React, {useState, Fragment, useEffect} from 'react'
import {GoogleMap, Marker, InfoWindow, useLoadScript} from "@react-google-maps/api"
import {Link} from "react-router-dom"
import Spinner from "./spinner"

// set map container size
const containerStyle = {
    width: '100%',
    height: '100vh'
  };

const Map = () => {

    // pass google map api key to load the Google Maps script
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY })

    // set up useState hook
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerMap, setMarkerMap] = useState({});
    const [infoWindowOpen, setInfoWindowOpen] = useState(false)

    // set the default map center to somewhere in Nigeria 
    const [center, setCenter] = useState({lat: 9.0820,lng: 8.6753})

    // make api call to backend to get requests details and location
    const locations = [
        {id: 1, title: 'lorem-req-1', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.', coords:{lat: 8.8471, lng: 7.8776}, type:'One time', status: 'Unfulfilled'},
        {id: 2, title: 'lorem-req-2', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', coords:{lat: 9.0787, lng: 7.4702}, type:'Material', status: 'Unfulfilled'},
        {id: 3, title: 'lorem-req-3', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', coords:{lat: 8.8764, lng: 7.2437}, type:'One time', status: 'Unfulfilled'},
    ]

    /* When a logged in user allows their browser to access their current
     location, the map automatically adjust to their geolocalised location
    */
    useEffect(() => {
        const getUserLocation = (position) => {
            return setCenter({lat: position.coords.latitude, lng: position.coords.longitude})
         }
         if(navigator.geolocation){
             navigator.geolocation.getCurrentPosition(getUserLocation)
         }else{
             console.log('Not supported')
         }
    },[])

    // mapping all of the places to actual Marker objects
    const markerLoadHandler = (marker, place) => {
        return setMarkerMap(prevState => {
            return {...prevState, [place.id]: marker}
        });
    }

    const markerClickHandler = (event, place) => {
        // remember which place was clicked
        setSelectedPlace(place)

        // this close the first marker infoWindowWindow on the click of the second marker
        if(infoWindowOpen){
            setInfoWindowOpen(false)
        }

        setInfoWindowOpen(true)
    }
    
const showMap = () => {
    return (
        <Fragment>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} zoom={9}    
                >
                {locations.map((place) => (
                    <Marker 
                        key={place.id} 
                        position={place.coords}
                        onLoad={(marker) => markerLoadHandler(marker, place)}
                        onClick={(event) => markerClickHandler(event, place)} 
                        />
                ))}

                {infoWindowOpen && selectedPlace && (
                    <InfoWindow 
                        anchor={markerMap[selectedPlace.id]}
                        onCloseClick={() => setInfoWindowOpen(false)}>
                        <div>
                        <h6 className="text-left">I need a blanket for this weather</h6>
                        <p className="text-left">Chinedu Emesue</p>
                        <div className="d-flex justify-content-between">
                            <p className=""><strong>Type: </strong>{selectedPlace.type}</p>
                            <p className=""><strong>Status: </strong>{selectedPlace.status}</p>
                        </div>
                        <p className="text-left">{selectedPlace.description}</p>
                        <Link className="btn btn-secondary btn-sm" to={`/request/${selectedPlace.id}/${selectedPlace.title}`}>Fulfill this need</Link>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
            </Fragment>
    )
    }
    return isLoaded ? showMap() : <Spinner />
}

export default Map