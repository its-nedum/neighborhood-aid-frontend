import React from 'react'
import Navbar from '../../layouts/navbar'
import { isLoggedIn } from "../../../services/utilities"
import {Redirect, Link} from 'react-router-dom'
import '../../../styles/messages.css'

/* This component holds all the volunteers to the logged in user's request
    with a button to redirect to the chat(Message Component) between him and his volunteer
*/
const Messages = (props) => {
    if(!isLoggedIn()) return <Redirect to='/' />
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="container mt-3 mb-5" style={{minHeight:'100vh'}}>
                <h5 className="my-request-heading">My Messages</h5>
                <div className="row mb-2">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <Link to="/request/message" className="mesg-link">
                            <div className="card pl-1 volunteers-card">
                                <p className="vol-name"><strong>Name:</strong> Peter Pan</p>
                                <p className="vol-mesg"><strong>You:</strong> Thanks for your help.</p>
                                <p className="vol-date"><strong>Date:</strong> November 08, 2020 01:00pm</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <Link to="/request/message" className="mesg-link">
                        <div className="card pl-1 volunteers-card">
                            <p className="vol-name"><strong>Name:</strong> James Rice</p>
                            <p className="vol-mesg"><strong>You:</strong> Thanks for your help.</p>
                            <p className="vol-date"><strong>Date:</strong> November 08, 2020 01:00pm</p>
                        </div>
                    </Link>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <Link to="/request/message" className="mesg-link">
                        <div className="card pl-1 volunteers-card">
                            <p className="vol-name"><strong>Name:</strong> Mary Mia</p>
                            <p className="vol-mesg"><strong>You:</strong> Thanks for your help.</p>
                            <p className="vol-date"><strong>Date:</strong> November 08, 2020 01:00pm</p>
                        </div>
                    </Link>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <Link to="/request/message" className="mesg-link">
                        <div className="card pl-1 volunteers-card">
                            <p className="vol-name"><strong>Name:</strong> Alice Pane</p>
                            <p className="vol-mesg"><strong>You:</strong> Thanks for your help.</p>
                            <p className="vol-date"><strong>Date:</strong> November 08, 2020 01:00pm</p>
                        </div>
                    </Link>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <Link to="/request/message" className="mesg-link">
                        <div className="card pl-1 volunteers-card">
                            <p className="vol-name"><strong>Name:</strong> Musa Sule</p>
                            <p className="vol-mesg"><strong>You:</strong> Thanks for your help.</p>
                            <p className="vol-date"><strong>Date:</strong> November 08, 2020 01:00pm</p>
                        </div>
                    </Link>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Messages
