import React from 'react'
import {NavLink, Link } from 'react-router-dom'
import '../../styles/navbar.css'
import { isLoggedIn, getUser } from "../../services/utilities"

const Navbar = ({ownProps}) => {

    const logout = () => {
        // remove auth token
        localStorage.removeItem('Aid-Auth')
        // redirect
        ownProps.history.push("/")
    }
    

    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light nav-bg">
                <NavLink className="navbar-brand" to="/">Neighborhood Aid</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {!isLoggedIn() ?
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link other-btn" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link other-btn" to="/sign-in">Log In</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-success action-btn" to="/sign-up">Create a Free Account</Link>
                        </li>
                    </ul>
                </div>
                 :
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link other-btn" to="/me/dashboard">Requests Map</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link other-btn" to="/request/new">Create a request</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link other-btn" to="/users/activities">My Activities</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link other-btn" to="/users/messages">Messages <span className="badge badge-light text-danger">3</span></NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {`${getUser().firstname} ${getUser().lastname}`}
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {/* <Link className="dropdown-item" to="#">My Profile</Link>
                            <Link className="dropdown-item" to="#">Settings</Link> */}
                            <Link className="dropdown-item" to="#" onClick={logout}>Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                  }
                
            </nav>
        </div>
    )
}

export default Navbar
