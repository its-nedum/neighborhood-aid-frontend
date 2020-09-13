import React from 'react'
import '../../styles/about.css'

const About = () => {
    return (
        <div>
            <div className="about-top">
                <h1 className="about-heading">Our Mission: To Create A Better Way To Exchange Acts Of Kindness.</h1>
            </div>
            <div className="container mt-4 mb-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-12 col-md-6">
                        <p className="about-text">
                        Technology can be used in many ways, but it's best used to help people. This can be at the global level, or it can be used to make a difference right outside your door!<br/> For example, you may have seen people sleeping in the streets, a single mother struggling to carry a new piece of furniture up the stairs, or someone whose car broke down, so now they can't get to work for a month.
                        </p>
                        <p className="about-text">
                        There are so many opportunities to help people; why not build a platform to facilitate exchanged acts of kindness?
                        </p>
                        <p className="about-text">
                        In this project, I built an aid platform that connects people in need to willing volunteers in their (or any) community.
                        </p>
                        <p className="about-text">
                            Thank you for choosing Neighborhood Aid
                        </p>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default About
