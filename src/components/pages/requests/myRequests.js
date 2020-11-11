import React from 'react'
import Navbar from '../../layouts/navbar'
import { isLoggedIn } from "../../services/utilities"
import {Redirect, Link} from 'react-router-dom'
import "../../styles/myRequests.css"

const MyRequests = (props) => {
    if(!isLoggedIn()) return <Redirect to='/' />
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="container mt-3 mb-5">
                <h4 className="my-request-heading">My Requests</h4>
                <div className="row mb-2">
                    <div className="col-md-2"></div>
                    <div className="col-12">
                        <div className="card my-request-card pl-2">
                            <h5 className="text-left mb-0 mt-2 req-title">I need a blanket for this cold weather</h5>
                            <p className="text-left mb-0 req-by"><strong>Request by:</strong> Jane Doe (You)</p>
                            <p className="text-left mb-0 req-type"><strong>Type:</strong> Material</p>
                            <p className="text-left mb-0 req-type"><strong>Status:</strong><span className="text-danger"> Unfulfill</span></p>
                            <p className="text-left mb-0 req-description text-truncate"><strong>Description:</strong> <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt expedita unde laboriosam eos tempore. Nostrum?</p>
                            <p className="text-left mb-0"><strong>Created:</strong> November 08, 2020 01:00pm</p>
                            <Link to="/request/1/i-need-a-blanket" className="req-link">View Request Status</Link>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                
            </div>
        </div>
    )
}

export default MyRequests
