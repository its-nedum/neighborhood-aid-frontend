import React, {useState} from 'react'
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import "../../../styles/request.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import loader from "../../../images/loader.gif"

const ReqForm = ({createRequest, processing}) => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    // const [location, setLocation] = useState({lat: null, lng: null});
    const [error, setError] = useState("")
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")

    const handleSelect = (value) => {
        geocodeByAddress(value)
        .then(results => {
            getLatLng(results[0])
            .then(latlng => {
                setAddress(value);
                // split this into lat and lng
                // setLocation(latlng);
                setLat(latlng.lat)
                setLng(latlng.lng)
            }).catch(error => console.log({'latlng': error}))
        }).catch(error => console.log({'geocodeError': error}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // setup form validation
        // check if all fields are filled
        if (!title || !type || !description || !address || !lat || !lng){
            setError("*All fields are required")
            return false;
        }else{

        const request = {
            title,
            reqtype: type,
            description,
            lat,
            lng,
            address,
            status: 0
        }

        // send data to be processed
        console.log(request)   

        // clear error
        setError("")
        }
    }
    return (
        <div className="pl-3">
            <form className="card mt-5 mb-5 pl-3 request-form">
                <ToastContainer />
                <h3 className="">Create a request</h3>
                <p className="text-left text-danger">{error}</p>
                <div className="row input-group">
                    <div className="col-12 mb-3">
                        <label>Title<span className="text-danger">*</span> <small>{title.length !== 0 ? `(${title.length})` : null}</small></label>
                        <input type="text" className="form-control" maxLength="50" value={title} onChange={e => setTitle(e.target.value)} placeholder="title" aria-label="title" />
                    </div>
                </div>
                <div className="row input-group">
                    <div className="col-12 mb-3">
                        <label>Type<span className="text-danger">*</span></label>
                        <select type="text" className="form-control" onChange={e => setType(e.target.value)}>
                            <option>select request type...</option>
                            <option value="one-time">One-time task</option>
                            <option value="material">Material need</option>
                        </select>
                    </div>
                </div>
                <div className="row input-group">
                    <div className="col-12 mb-3">
                        <label>Description<span className="text-danger">*</span> <small>{description.length !== 0 ? `(${description.length})` : null}</small></label>  
                        <textarea className="form-control" rows="5" maxLength="300" value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                </div>
                <div className="row input-group">
                    <div className="col-12 mb-3">
                        <PlacesAutocomplete 
                            value={address}
                            onChange={setAddress}
                            onSelect={handleSelect} 
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>  
                                    <label>Location<span className="text-danger">*</span></label>  
                                    <input {...getInputProps()} type="text" className="form-control" placeholder="location" aria-label="location" />
                                    <div className="autocomplete-dropdown mb-2 text-left pl-3">
                                        {loading ? <div>loading...</div> : null}
                                        {suggestions.map((suggestion, index) => {
                                            const style = {
                                                backgroundColor: suggestion.active ? "#083E9E" : "#fff",
                                                color: suggestion.active ? "#fff" : "#083E9E",
                                                cursor: suggestion.active ? 'pointer' : 'pointer',
                                            };
                                            return <div {...getSuggestionItemProps(suggestion, { style })} key={index}>{suggestion.description}</div>
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                    </div>
                </div>
                <div className="row btn-group pr-4">
                    <div className="col-12 col-md-4 mb-3">
                        {processing ? <img src={loader} style={{height:'70px'}} alt="processing-loader"/> :
                        <button type="button" className="form-control btn btn-primary" onClick={handleSubmit}>Submit</button>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ReqForm
