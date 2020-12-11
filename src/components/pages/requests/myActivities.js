import React from 'react'
import Navbar from '../../layouts/navbar'
import { isLoggedIn } from "../../services/utilities"
import {Redirect, Link} from 'react-router-dom'
import "../../../styles/myActivities.css"

const MyActivities = (props) => {
    if(!isLoggedIn()) return <Redirect to='/' />
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="container mt-3 mb-5 myRequests">
                <div className="row">
                   <div className="col-12 col-md-6">
                   <h5 className="my-request-heading">My Requests</h5>
                    <div className="row mb-2">
                        <div className="col-12 mb-2">
                            <div className="card my-request-card pl-2">
                                <h5 className="text-left mb-0 mt-2 req-title">I need a blanket for this cold weather</h5>
                                <p className="text-left mb-0"><strong>Request by:</strong> Jane Doe (You)</p>
                                <p className="text-left mb-0"><strong>Type:</strong> Material</p>
                                <p className="text-left mb-0"><strong>Status:</strong><span className="text-danger"> Unfulfill</span></p>
                                <p className="text-left mb-0 text-truncate"><strong>Description:</strong> <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt expedita unde laboriosam eos tempore. Nostrum?</p>
                                <p className="text-left mb-0"><strong>Created:</strong> November 08, 2020 01:00pm</p>
                                <div className="d-flex mb-2">
                                    <Link to="/request/1/i-need-a-blanket" className="btn btn-info btn-sm mr-1">View Request</Link>
                                    <Link to="#" className="btn btn-success btn-sm ml-1">Mark as Fulfilled</Link>
                                    <Link to="#" className="btn btn-warning btn-sm ml-1">Re-publish Request</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-12 mb-2">
                            <div className="card my-request-card pl-2">
                                <h5 className="text-left mb-0 mt-2 req-title">I need a blanket for this cold weather</h5>
                                <p className="text-left mb-0"><strong>Request by:</strong> Jane Doe (You)</p>
                                <p className="text-left mb-0"><strong>Type:</strong> Material</p>
                                <p className="text-left mb-0"><strong>Status:</strong><span className="text-danger"> Unfulfill</span></p>
                                <p className="text-left mb-0 text-truncate"><strong>Description:</strong> <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt expedita unde laboriosam eos tempore. Nostrum?</p>
                                <p className="text-left mb-0"><strong>Created:</strong> November 08, 2020 01:00pm</p>
                                <div className="d-flex mb-2">
                                    <Link to="/request/1/i-need-a-blanket" className="btn btn-info btn-sm mr-1">View Request</Link>
                                    <Link to="#" className="btn btn-success btn-sm ml-1">Mark as Fulfilled</Link>
                                    <Link to="#" className="btn btn-warning btn-sm ml-1">Re-publish Request</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div> 

                    <div className="col-12 col-md-6">
                    <h5 className="my-request-heading">My Volunteering</h5>
                    <div className="row mb-2">
                        <div className="col-12 mb-2">
                            <div className="card my-request-card pl-2">
                                <h5 className="text-left mb-0 mt-2 req-title">I need a blanket for this cold weather</h5>
                                <p className="text-left mb-0"><strong>Request by:</strong> Musa Bulus</p>
                                <p className="text-left mb-0"><strong>Type:</strong> Material</p>
                                <p className="text-left mb-0"><strong>Status:</strong><span className="text-success"> Fulfilled</span></p>
                                <p className="text-left mb-0 text-truncate"><strong>Description:</strong> <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt expedita unde laboriosam eos tempore. Nostrum?</p>
                                <p className="text-left mb-0"><strong>Created:</strong> November 08, 2020 01:00pm</p>
                                <div className="d-flex mb-2">
                                    <Link to="/request/1/i-need-a-blanket" className="btn btn-info btn-sm mr-1">View Request</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-12 mb-2">
                            <div className="card my-request-card pl-2">
                                <h5 className="text-left mb-0 mt-2 req-title">I need a blanket for this cold weather</h5>
                                <p className="text-left mb-0"><strong>Request by:</strong> Musa Bulus</p>
                                <p className="text-left mb-0"><strong>Type:</strong> Material</p>
                                <p className="text-left mb-0"><strong>Status:</strong><span className="text-success"> Fulfilled</span></p>
                                <p className="text-left mb-0 text-truncate"><strong>Description:</strong> <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt expedita unde laboriosam eos tempore. Nostrum?</p>
                                <p className="text-left mb-0"><strong>Created:</strong> November 08, 2020 01:00pm</p>
                                <div className="d-flex mb-2">
                                    <Link to="/request/1/i-need-a-blanket" className="btn btn-info btn-sm mr-1">View Request</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MyActivities