import React, {useState} from 'react'
import "../../../styles/request.css"
import Navbar from '../../layouts/navbar'
// import { isLoggedIn } from "../../services/utilities"
// import {Redirect} from 'react-router-dom'
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete'

const Request = (props) => {
    // if(!isLoggedIn()) return <Redirect to='/' />
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState({lat: null, lng: null});

    const handleSelect = (value) => {
        geocodeByAddress(value)
        .then(results => {
            getLatLng(results[0])
            .then(latlng => {
                setAddress(value);
                setLocation(latlng);
            }).catch(error => console.log({'latlng': error}))
        }).catch(error => console.log({'geocodeError': error}))
    }

    const handleSubmit = () => {
        console.log({title, type, description, location, address})
    }

    return (
        <div>
        <Navbar ownProps={props}/>
        <div className="container-fluid mb-3">
                <div className="row pl-3">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form className="card mt-5 mb-5 pl-3 request-form">
                            <h3 className="">Create a request</h3>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Title<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} placeholder="title" aria-label="title" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Type<span className="text-danger">*</span></label>
                                    <select type="text" className="form-control" onChange={e => setType(e.target.value)}>
                                        <option>select request type...</option>
                                        <option value="One-time task">One-time task</option>
                                        <option value="Material need">Material need</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Description<span className="text-danger">*</span></label>  
                                    <textarea className="form-control" rows="5" value={description} onChange={e => setDescription(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row input-group">
                                <PlacesAutocomplete 
                                    value={address}
                                    onChange={setAddress}
                                    onSelect={handleSelect} 
                                >
                                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                        <div>
                                            
                                            <div className="col-12 mb-3">
                                                <label>Location<span className="text-danger">*</span></label>  
                                                <input {...getInputProps()} type="text" className="form-control" placeholder="location" aria-label="location" />
                                            </div>
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
                            <div className="row btn-group pr-4">
                                <div className="col-12 col-md-4 mb-3">
                                    <button type="button" className="form-control btn btn-primary" onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Request
