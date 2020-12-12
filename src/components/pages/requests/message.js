import React from 'react'
import Navbar from '../../layouts/navbar'
import { isLoggedIn } from "../../../services/utilities"
import {Redirect} from 'react-router-dom'
import '../../../styles/message.css'

const Message = (props) => {
    if(!isLoggedIn()) return <Redirect to='/' />
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="container mt-5 message-container">
                <div className="row">
                    <div className="col-12 col-md-4 mb-4 order-2 order-md-1">
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
                    <div className="col-12 col-md-8 mb-4 order-1 order-md-2">
                        <div className="card">
                            <div className="chat-head">
                                <h5>Chinedu Emesue</h5>
                            </div>
                            <div className="chat-body">
                                <div>
                                    <div className="messageContainer justifyEnd">
                                        <p className="sentText pr-10"> 09:34am </p>
                                        <div className="messageBox backgroundBlue">
                                            <p className="messageText colorWhite">Hello world Lorem ipsum dolor.</p>
                                        </div>
                                    </div>

                                    <div className="messageContainer justifyStart">
                                        <div className="messageBox backgroundLight">
                                            <p className="messageText colorDark">Hey world Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                        </div>
                                        <p className="sentText pl-10"> 09:37am </p>
                                    </div>

                                    <div className="messageContainer justifyEnd">
                                        <p className="sentText pr-10"> 09:34am </p>
                                        <div className="messageBox backgroundBlue">
                                            <p className="messageText colorWhite">Hello world Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="messageContainer justifyEnd">
                                        <p className="sentText pr-10"> 09:34am </p>
                                        <div className="messageBox backgroundBlue">
                                            <p className="messageText colorWhite">Hello world Lorem ipsum dolor.</p>
                                        </div>
                                    </div>

                                    <div className="messageContainer justifyStart">
                                        <div className="messageBox backgroundLight">
                                            <p className="messageText colorDark">Hey world Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                        </div>
                                        <p className="sentText pl-10"> 09:37am </p>
                                    </div>

                                    <div className="messageContainer justifyEnd">
                                        <p className="sentText pr-10"> 09:34am </p>
                                        <div className="messageBox backgroundBlue">
                                            <p className="messageText colorWhite">Hello world Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                    </div>
                                    <div className="messageContainer justifyEnd">
                                        <p className="sentText pr-10"> 09:34am </p>
                                        <div className="messageBox backgroundBlue">
                                            <p className="messageText colorWhite">Hello world Lorem ipsum dolor.</p>
                                        </div>
                                    </div>

                                    <div className="messageContainer justifyStart">
                                        <div className="messageBox backgroundLight">
                                            <p className="messageText colorDark">Hey world Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                        </div>
                                        <p className="sentText pl-10"> 09:37am </p>
                                    </div>

                                    <div className="messageContainer justifyEnd">
                                        <p className="sentText pr-10"> 09:34am </p>
                                        <div className="messageBox backgroundBlue">
                                            <p className="messageText colorWhite">Hello world Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-action">
                                <div className="text-input">
                                    <input type="text" className="form-control" placeholder="type your messages here..." />
                                </div>
                                <div className="chat-btn">
                                    <button className="form-control">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
