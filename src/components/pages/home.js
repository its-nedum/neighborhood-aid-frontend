import React from 'react'
import '../../styles/home.css'
import { Link } from 'react-router-dom'
import account from '../../images/account.png'
import request from '../../images/request.png'
import volunteer from '../../images/volunteer.png'

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
            <div className="second-section container-fluid pt-4 pb-4 mb-5">
                <h1 className="second-section-heading">Together We Can Help Our Community</h1>
                <p className="second-section-text">Technology can be used in many ways, but it's best used to help people.<br/> This can be at the global level, or it can be used to make a difference right outside your door!</p>
            </div>
            <div className="third-section container">
                <div className="row mt-5">
                    <div className="col-12 col-md-4 card">
                        <img src={account} alt="account-pix" className="img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">Create <br/> an Acount</h5>
                            <p className="card-text">
                            Create an account with your first name, last name, email address and upload a copy of any government approved ID.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card">
                        <img src={volunteer} alt="volunteer-pix" className="img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">Volunteer <br/> to Help</h5>
                            <p className="card-text">Use the geolocalized map with markers on it indicating people in need of community help.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card">
                        <img src={request} alt="request-pix" className="img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">Request <br/> for Help</h5>
                            <p className="card-text">Submit a request for help with a brief description, type of request and your location.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
