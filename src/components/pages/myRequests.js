import React from 'react'
import Navbar from '../layouts/navbar'
import { isLoggedIn } from "../services/utilities"
import {Redirect} from 'react-router-dom'

const MyRequests = (props) => {
    if(!isLoggedIn()) return <Redirect to='/' />
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="mt-5">
                
            </div>
        </div>
    )
}

export default MyRequests
