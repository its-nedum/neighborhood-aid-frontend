import React from 'react'
import Navbar from '../layouts/navbar'
import { isLoggedIn } from "../services/utilities"
import {Redirect} from 'react-router-dom'

const Message = (props) => {
    if(!isLoggedIn()) return <Redirect to='/' />
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="mt-5">
                {/* This page displays the request details */}
            </div>
        </div>
    )
}

export default Message
