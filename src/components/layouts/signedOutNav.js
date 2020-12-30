import React from 'react'
import {NavLink, Link } from 'react-router-dom'

const SignedOutNav = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light nav-bg">
                <NavLink className="navbar-brand" to="/">Neighborhood Aid</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
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
            </nav>
        </div>
    )
}

export default SignedOutNav
