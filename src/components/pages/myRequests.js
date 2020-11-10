import React from 'react'
import Navbar from '../layouts/navbar'
import { isLoggedIn } from "../services/utilities"
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
                            <h5 className="mt-2 req-title">I need a blanket for this cold weather</h5>
                            <p className="req-by">Request by: Jane Doe (You)</p>
                            <p className="req-type">Type: Material</p>
                            <p className="req-description text-truncate">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt expedita unde laboriosam eos tempore. Nostrum?</p>
                            <Link to="/request/1/i-need-a-blanket" className="req-link">View Request Status</Link>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-2"></div>
                    <div className="col-12">
                        <div className="card my-request-card pl-2">
                            <h5 className="mt-2 req-title">I need a blanket for this cold weather</h5>
                            <p className="req-by">Request by: Jane Doe (You)</p>
                            <p className="req-type">Type: Material</p>
                            <p className="req-description text-truncate">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt expedita unde laboriosam eos tempore. Nostrum?</p>
                            <Link to="/request/1/i-need-a-blanket" className="req-link">View Request Status</Link>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-2"></div>
                    <div className="col-12">
                        <div className="card my-request-card pl-2">
                            <h5 className="mt-2 req-title">I need a blanket for this cold weather</h5>
                            <p className="req-by">Request by: Jane Doe (You)</p>
                            <p className="req-type">Type: Material</p>
                            <p className="req-description text-truncate">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt expedita unde laboriosam eos tempore. Nostrum?</p>
                            <Link to="/request/1/i-need-a-blanket" className="req-link">View Request Status</Link>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-2"></div>
                    <div className="col-12">
                        <div className="card my-request-card pl-2">
                            <h5 className="mt-2 req-title">I need a blanket for this cold weather</h5>
                            <p className="req-by">Request by: Jane Doe (You)</p>
                            <p className="req-type">Type: Material</p>
                            <p className="req-description text-truncate">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt expedita unde laboriosam eos tempore. Nostrum?</p>
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
