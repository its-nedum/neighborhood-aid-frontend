import React from 'react'
import {GoogleMap, LoadScript, Marker, InfoWindow} from "@react-google-maps/api"
// import ico from "./icons/man-user.svg"
// AIzaSyCyvcvBNnBFKP0Xnbb4K-BnMl9f_NXYhDc
// https://www.airmeet.com/event/47b35460-0a6d-11eb-9aa2-db9f70964def
const containerStyle = {
    width: '100%',
    height: '100vh'
  };
  
  const center = {
    // The logged in user location will be the center
    lat: 9.0765,
    lng: 7.3986
  };

const Mapped = () => {
    // const [showInfoWindow, setShowInfoWindow] = useState(false)
    // const [activeMarker, setActiveMarker] = useState({})
    // const [selectedPlace, setSelectedPlace] = useState({})

    const onMarkerClick = (e) => {
        console.log({e})
        // setSelectedPlace(props)
        // setActiveMarker(marker)
        // setShowInfoWindow(true)
    }

    const locations = [
        {id: 1, name: 'Keffi', cord:{lat: 8.8471, lng: 7.8776}, mesg:'I love keffi'},
        {id: 2, name: 'Wuse', cord:{lat: 9.0787, lng: 7.4702}, mesg:'I love Wuse' },
        {id: 3, name: 'Kuje', cord:{lat: 8.8764, lng: 7.2437}, mesg:'I love Kuje' },
    ]

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                {locations.map((place) => {
                    return(
                        <Marker key={place.id} position={place.cord} onClick={(e) => {onMarkerClick(e)}}>
                            <InfoWindow id="test" key={place.id} position={center}><h3>{place.name}</h3></InfoWindow>
                        </Marker>
                    )
                })}
                
        
            </GoogleMap>
        </LoadScript>
    )
}

export default Mapped
