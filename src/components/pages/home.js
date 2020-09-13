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
            <div className="second-section container-fluid">
            <h1 className="second-section-heading">Let's Help Our Community</h1>
            <p className="second-section-text">Technology can be used in many ways, but it's best used to help people.<br/> This can be at the global level, or it can be used to make a difference right outside your door!</p>
                <div className="row mt-5">
                    <div className="col-12 col-md-4 card">
                        <img src={account} alt="account-pix" className="img-fluid" />
                        <div className="card-body">
                            <h1>Text</h1>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card">
                        <img src={volunteer} alt="account-pix" className="img-fluid" />
                        <div className="card-body">
                            <h1>Text</h1>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card">
                        <img src={request} alt="account-pix" className="img-fluid" />
                        <div className="card-body">
                            <h1>Text</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third-section container-fluid">
                <div className="row">
                <h1>Section Three</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
