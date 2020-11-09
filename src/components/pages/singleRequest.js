import React from 'react'
import Navbar from '../layouts/navbar'
import "../../styles/singleRequest.css"
import { isLoggedIn } from "../services/utilities"
import {Redirect} from 'react-router-dom'

//This page displays the request details
const SingleRequest = (props) => {
    if(!isLoggedIn()) return <Redirect to='/' />
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="container single-banner mt-5">
                <div className="row">
                    <div className="col-12">
                    <h4 className="float-left">About the request:</h4>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12 col-md-7">
                        <div className="about-request">
                            <div className="card pl-2 pr-2">
                                <div className="about-body">
                                    <h5 className="request-title">I need a blanket for this cold weather</h5>
                                    <h6 className="float-left">Plot 1419 Gudu District Apo Abuja</h6>
                                    <p className="float-left float-md-right">Type: <i>Material need</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="about-requester">
                            <div className="ard">
                            <h5 className="float-left">Help Requested By:</h5>
                            <p className="">November 08, 2020 01:00pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-7">
                        <div className="about-volunteers">
                            <div className="card">
                                dfghjkl
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mb-3">
                    <div className="col-12 col-md-6">
                        <div className="card">
                        <form className="submit-help-form pl-3">
                            <h4 className="float-left">Do You Want to Volunteer to help?</h4>
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
                        </form></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRequest
