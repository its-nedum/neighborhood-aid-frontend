import React from 'react'
import { compose, withProps } from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100vh` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 9.0765, lng: 7.3986 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 9.0765, lng: 7.3986 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
  )

  class Map extends React.PureComponent {
    state = {
      isMarkerShown: false,
    }
  
    componentDidMount() {
      this.delayedShowMarker()
    }
  
    delayedShowMarker = () => {
      setTimeout(() => {
        this.setState({ isMarkerShown: true })
      }, 3000)
    }
  
    handleMarkerClick = () => {
      this.setState({ isMarkerShown: false })
      this.delayedShowMarker()
    }
  
    render() {
      return (
        <div className="mt-5 mapSize">
            <MyMapComponent isMarkerShown={this.state.isMarkerShown} onMarkerClick={this.handleMarkerClick} />
        </div>
      )
    }
}

export default Map