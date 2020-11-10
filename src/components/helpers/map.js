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
        {id: 1, name: 'Keffi', cord:{lat: 8.8471, lng: 7.8776}, type:'One time', mesg:'I love keffi'},
        {id: 2, name: 'Wuse', cord:{lat: 9.0787, lng: 7.4702}, type:'Material',  mesg:'I love Wuse' },
        {id: 3, name: 'Kuje', cord:{lat: 8.8764, lng: 7.2437}, type:'One time', mesg:'I love Kuje' },
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
                        position={place.cord}
                        onLoad={(marker) => markerLoadHandler(marker, place)}
                        onClick={(event) => markerClickHandler(event, place)} 
                        />
                ))}

                {infoWindowOpen && selectedPlace && (
                    <InfoWindow 
                        anchor={markerMap[selectedPlace.id]}
                        onCloseClick={() => setInfoWindowOpen(false)}>
                        <div>
                        <h3>{selectedPlace.name}</h3>
                        <p>{selectedPlace.mesg}</p>
                        <Link className="btn btn-secondary btn-sm" to={`/request/${selectedPlace.id}/${selectedPlace.mesg}`}>Fulfill this need</Link>
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