import React from 'react'
import './Menus.css';
import { Link} from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReading, FcVideoProjector, FcBusinessContact } from 'react-icons/fc';
const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                <Zoom>
                <div className="navbar-profile-pic">
                    <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/a3/03/f7/a303f72a-6e63-3167-3462-a957486c4f3e/source/512x512bb.jpg" alt="error-profile-pic" />
                </div>
                </Zoom>
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
                                <FcHome />
                                </Link>
                            </div>
                            <div className="nav-link">
                            <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                                <FcAbout />
                                </Link>
                            </div>
                            <div className="nav-link">
                            <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                            <FcReading />
                                </Link>
                            </div>
                            <div className="nav-link">
                            <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                            <FcBiotech />
                                </Link> 
                            </div>
                            <div className="nav-link">
                            <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                            <FcVideoProjector />
                                </Link>
                            </div>
                            <div className="nav-link">
                            <Link to="workexperience" spy={true} smooth={true} offset={-100} duration={100}>
                            <FcPortraitMode />
                                </Link>
                            </div>
                            <div className="nav-link">
                            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                            <FcBusinessContact />
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