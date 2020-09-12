import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/footer.css'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-7">
                        <h5 className="footer-headings">Neighborhood Aid</h5>
                    </div>
                    <div className="col-12 col-sm-5">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h5 className="footer-headings">Quick LInks</h5>
                                <div className="quick_links">
                                <ul className="">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/stories">Stories</Link></li>
                                    <li><Link to="/sign-in">Log In</Link></li>
                                    <li><Link to="/sign-up">Sign Up</Link></li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <h5 className="footer-headings">Company</h5>
                                <div className="service_links">
                                <ul>
                                    <li><Link to="#">Support</Link></li>
                                    <li><Link to="#">Careers</Link></li>
                                    <li><Link to="#">Term of Service</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook"></span></a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-twitter"></span></a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-instagram"></span></a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
