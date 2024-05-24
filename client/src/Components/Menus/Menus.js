import React from 'react'
import './Menus.css';
import profileimg from '../../Assets/imgs/profileimg.jpg'
import { Link } from 'react-scroll';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { GrCertificate } from "react-icons/gr";
import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReading, FcVideoProjector, FcBusinessContact } from 'react-icons/fc';
const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                    <Flip>
                        <div className="navbar-profile-pic">
                            <img src={profileimg} alt="error-profile-pic" />
                        </div>
                    </Flip>
                    <Fade left>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcHome />
                                        Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcAbout />
                                        About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcReading />
                                        Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="certificatesLicence" spy={true} smooth={true} offset={-100} duration={100}>
                                        <GrCertificate />
                                        Certifications&Licence
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcBiotech />
                                        Tech Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcVideoProjector />
                                        Projects
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="workexperience" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcPortraitMode />
                                        Work Experience
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcBusinessContact />
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </>) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcHome title="Home" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcAbout title="About" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcReading title="Education" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="certificatesLicence " spy={true} smooth={true} offset={-100} duration={100}>
                                    <GrCertificate title="Certifications&Licence" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcBiotech title="Tech Stack" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcVideoProjector title="Projects" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="workexperience" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcPortraitMode title="Work Experience" />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcBusinessContact title="Contact" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default Menus