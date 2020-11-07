import React from 'react'
import "../../styles/dashboard.css"
import Navbar from '../layouts/navbar'
// import Map from "../helpers/map"
import Mapped from "../helpers/mapped"

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="dashboard">
                <Mapped />
            </div>
        </div>
    )
}

export default Dashboard
