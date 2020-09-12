import React from 'react'
import '../../styles/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="first-section mt-5">
                <div className="inner-content container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-8 intro-txt">
                            <h1>A Better Way <br/>To Exchange Acts Of Kindness</h1>
                            <div className="">
                                <Link to="/sign-in" className="myBtn">Create a Free Account</Link>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>
            <div className="second-section container-fluid">
                <div className="row">
                    <h1>Section two</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
