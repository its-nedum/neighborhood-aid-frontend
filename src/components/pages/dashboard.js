import React from 'react'
import "../../styles/dashboard.css"
import Navbar from '../layouts/navbar'
import Map from "../helpers/map"

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid dashboard">
                <Map />
            </div>
        </div>
    )
}

export default Dashboard
