import React from 'react'
import "../../../styles/dashboard.css"
import Navbar from '../../layouts/navbar'
import Map from "../../maps/map"
import { isLoggedIn } from "../../../services/utilities"
import {Redirect} from 'react-router-dom'
import Form from './reqForm'

const Dashboard = (props) => {
    if(!isLoggedIn()) return <Redirect to='/' />
    return (
        <div>
            <Navbar ownProps={props}/>
            <div className="dashboard">
                <div className="row d-flex">
                    <div className="col-12 col-md-5 order-2 order-md-1">
                        <Form />
                    </div>
                    <div className="col-12 col-md-7 order-1 order-md-2">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
