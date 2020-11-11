import React from 'react'
import "../../styles/dashboard.css"
import Navbar from '../layouts/navbar'
import Map from "../helpers/map"
import { isLoggedIn } from "../services/utilities"
import {Redirect} from 'react-router-dom'

const Dashboard = (props) => {
    if(!isLoggedIn()) return <Redirect to='/' />
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="dashboard">
                <Map />
            </div>
        </div>
    )
}

export default Dashboard
