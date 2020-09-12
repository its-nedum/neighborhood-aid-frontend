import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import '../../styles/navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <NavLink className="navbar-brand" to="/">Neighborhood Aid</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/stories">Stories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/sign-in">Log In</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-primary" to="/sign-up">Create a Free Account</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
