import React from 'react'
import Navbar from '../../layouts/navbar'
import { isLoggedIn } from "../../services/utilities"
import {Redirect} from 'react-router-dom'

const Message = (props) => {
    if(!isLoggedIn()) return <Redirect to='/' />
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="container-fluid mt-5" style={{height:'100vh'}}>
                <div className="row">
                    <div className="col-12 col-md-4 mb-3 order-2 order-md-1">
                        <div className="about-request">
                            <div className="card pl-2 pr-2">
                                <div className="about-body">
                                    <h5 className="request-title">I need a blanket for this cold weather</h5>
                                    <h6 className="about-req-by"><strong>Request by:</strong> Chinedu Emesue</h6>
                                    <p className="about-req-type"><strong>Type:</strong> Material</p>
                                    <p className="about-req-type"><strong>Status:</strong> Unfulfilled</p>
                                    <p className="about-req-description"><strong>Description:</strong> <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo incidunt quis. Vero, tempore dolores.</p>
                                    <p className="about-req-created"><strong>Created at:</strong> November 08, 2020 01:00pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 mb-3 order-1 order-md2">
                        <div className="card">
                            Hello world!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
