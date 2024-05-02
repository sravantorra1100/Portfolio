import React from 'react'
import './Menus.css';
import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReading, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from 'react-icons/fc';
const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <><div className="navbar-profile-pic">
                    <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/a3/03/f7/a303f72a-6e63-3167-3462-a957486c4f3e/source/512x512bb.jpg" alt="error-profile-pic" />
                </div>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <FcHome />
                                Home
                            </div>
                            <div className="nav-link">
                                <FcAbout />
                                About
                            </div>
                            <div className="nav-link">
                                <FcPortraitMode />
                                Work Experience
                            </div>
                            <div className="nav-link">
                                <FcBiotech />
                                Tech Stack
                            </div>
                            <div className="nav-link">
                                <FcReading />
                                Education
                            </div>
                            <div className="nav-link">
                                <FcVideoProjector />
                                Projects
                            </div>
                            <div className="nav-link">
                                <FcVoicePresentation />
                                Testimonial
                            </div>
                            <div className="nav-link">
                                <FcBusinessContact />
                                Contact
                            </div>
                        </div>
                    </div>
                </>) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <FcHome title='Home' />
                            </div>
                            <div className="nav-link">
                                <FcAbout title='About' />
                            </div>
                            <div className="nav-link">
                                <FcPortraitMode title='Work Experience'/>
                            </div>
                            <div className="nav-link">
                                <FcBiotech  title='Tech Stack'/>
                            </div>
                            <div className="nav-link">
                                <FcReading  title='Education'/>
                            </div>
                            <div className="nav-link">
                                <FcVideoProjector  title='Projects'/>
                            </div>
                            <div className="nav-link">
                                <FcVoicePresentation  title='Testimonial' />
                            </div>
                            <div className="nav-link">
                                <FcBusinessContact  title='Contact'/>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default Menus