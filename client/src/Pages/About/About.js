import React from 'react'
import './About.css'
import Pulse from 'react-reveal/Pulse';
import profileimg from '../../Assets/imgs/profileimg.jpg'

const About = () => {
    return (
        <>
        <Pulse>
            <div className="about" id="about">
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                        <img src={profileimg} alt="error-profile-pic" />
                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                        <h1>About Me</h1>
                        <p>I'm a dynamic and results oriented Web Developer with strong skills & 
                            leadership abilities. I thrive in collaborative environments and excel 
                            in high pressure situations.
                            Committed to continuous learning and skill enhancement, I bring a valuable
                            blend of technical expertise and adaptability to contribute significantly
                            to your organization.
                           </p>
                        
                    </div>
                </div>
            </div>
            </Pulse>
        </>
    )
}

export default About