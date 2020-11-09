import React, {useState, Fragment} from 'react'
import {GoogleMap, Marker, InfoWindow, useLoadScript} from "@react-google-maps/api"

const containerStyle = {
    width: '100%',
    height: '100vh'
  };

const Mapped = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY })

    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerMap, setMarkerMap] = useState({});
    const [infoOpen, setInfoOpen] = useState(false)

    const locations = [
        {id: 1, name: 'Keffi', cord:{lat: 8.8471, lng: 7.8776}, mesg:'I love keffi'},
        {id: 2, name: 'Wuse', cord:{lat: 9.0787, lng: 7.4702}, mesg:'I love Wuse' },
        {id: 3, name: 'Kuje', cord:{lat: 8.8764, lng: 7.2437}, mesg:'I love Kuje' },
    ]

    const center = {lat: 9.0765,lng: 7.3986}

    const fitBounds = map => {
        const bounds = new window.google.maps.LatLngBounds();
        locations.map(place => {
            bounds.extend(place.cord);
            return place.id;
        })
        map.fitBounds(bounds)
    }

    const loadHandler = map => {
        // fit map bounds to contain all markers
        fitBounds(map)
    }

    const markerLoadHandler = (marker, place) => {
        return setMarkerMap(prevState => {
            return {...prevState, [place.id]: marker}
        });
    }

    const markerClickHandler = (event, place) => {
        // remember which place was clicked
        setSelectedPlace(place)

        // 
        if(infoOpen){
            setInfoOpen(false)
        }

        setInfoOpen(true)
    }
    
const showMap = () => {
    return (
        <Fragment>
            <GoogleMap 
                onLoad={loadHandler} 
                mapContainerStyle={containerStyle} 
                center={center} zoom={10}    
                >
                {locations.map((place) => (
                    <Marker 
                        key={place.id} 
                        position={place.cord}
                        onLoad={(marker) => markerLoadHandler(marker, place)}
                        onClick={(event) => markerClickHandler(event, place)} 
                        />
                ))}

                {infoOpen && selectedPlace && (
                    <InfoWindow 
                        anchor={markerMap[selectedPlace.id]}
                        onCloseClick={() => setInfoOpen(false)}>
                        <div>
                        <h3>{selectedPlace.name}</h3>
                        <p>{selectedPlace.mesg}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
            </Fragment>
    )
    }
    return isLoaded ? showMap() : <p>Loading map please wait...</p>
}

export default Mapped
