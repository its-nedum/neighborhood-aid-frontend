import React from 'react'
import Navbar from '../layouts/navbar'
import "../../styles/singleRequest.css"
import { isLoggedIn } from "../services/utilities"
import {Redirect} from 'react-router-dom'
import SingleRequestMap from "../helpers/singleRequestMap"

//This page displays the request details
const SingleRequest = (props) => {
    if(!isLoggedIn()) return <Redirect to='/' />
    return (
        <div>
            <Navbar ownProps={props}/>
            <SingleRequestMap />
            <div className="container single-banner mt-3">
                <div className="row">
                    <div className="col-12">
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-7 mb-3">
                        <div className="about-request">
                            <div className="card pl-2 pr-2">
                                <div className="about-body">
                                    <h5 className="request-title">I need a blanket for this cold weather</h5>
                                    <h6 className="about-req-by"><strong>Request by:</strong> Chinedu Emesue</h6>
                                    <p className="about-req-type"><strong>Type:</strong> Material</p>
                                    <p className="about-req-description"><strong>Description:</strong> <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo incidunt quis. Vero, tempore dolores.</p>
                                    <p className="about-req-created"><strong>Created at:</strong> November 08, 2020 01:00pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-5">
                        <div className="about-volunteers">
                            <div className="card">
                            <h5 className="pl-2">Volunteers For This Request</h5>
                            <div className="table-responsive pl-2">
                                <table className="table">
                                    <tbody className="pl-2">
                                        <tr>
                                            <td>1</td>
                                            <td>John Doe</td>
                                            <td>November 08, 2020 01:00pm</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>John Doe</td>
                                            <td>November 08, 2020 01:00pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row mt-3 mb-3">
                    <div className="col-12 col-md-7">
                        <div className="card">
                        <form className="submit-help-form pl-2 pr-2">
                            <h5 className="text-left">Do You Want to Volunteer?</h5>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Message</label>
                                    <textarea className="form-control" placeholder="Type message to the requester here..." aria-label="message" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="btn-group col-12 col-md-4 mb-3">
                                    <button type="button" className="form-control btn btn-success">SEND</button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRequest
