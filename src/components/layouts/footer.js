import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/footer.css'

const Footer = () => {
    return (
        <div>
            <hr />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-7 mb-3 order-2 order-md-1">
                        <h5 className="footer-headings footer-logo">Neighborhood Aid</h5>
                        <p className="footer-text">Technology can be used in many ways, but it's best used to help people.<br/> This can be at the global level, or it can be used to make a difference right outside your door!</p>
                        <p className="footer-text">Neighborhood aid helps to facilitate exchanged acts of kindness by connecting<br/> people in need to willing volunteers in their community.</p>
                        <p className="footer-copyright">&copy; 2020 Neighborhood Aid. All rights reserved | Developed with <span className="text-danger">♥</span> by <a href="https://github.com/its-nedum" target="_blank" rel="noopener noreferrer">Chinedu Emesue</a></p>
                    </div>
                    <div className="col-12 col-sm-5 order-1 order-md-2">
                        <div className="row">
                            <div className="col-12 col-sm-6 mb-3">
                                <h5 className="footer-headings">Quick Links</h5>
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
                            <div className="col-12 col-sm-6 mb-3">
                                <h5 className="footer-headings">Company</h5>
                                <div className="service_links">
                                <ul>
                                    <li><Link to="#">Support</Link></li>
                                    <li><Link to="#">Careers</Link></li>
                                    <li><Link to="#">Term of Service</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li className="social_links">
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
