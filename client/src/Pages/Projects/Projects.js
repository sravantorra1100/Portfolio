import React from 'react'
import './Projects.css'
import Spin from 'react-reveal/Spin';
import text from '../../Assets/imgs/text.png'
import Pulse from 'react-reveal/Pulse';

const Projects = () => {
    return (
        <>
            <Pulse>
                <div className="continer project" id="projects">
                    <h6 className='col-12 mt-3 ml-1 text-center smalltitle'>Some of my recent works</h6>
                    <h2 className='col-12 mt-3 ml-1 text-center text-uppercase'>Projects</h2><hr />
                    <p className='pb-3 text-center'>I have made different  projects to increase my knowledge about Programming skills and some of them are listed below,</p>
                    <div className="row" id='ads'>
                        <Pulse>
                            <div className="col-md-4">
                                <div className="card rounded">
                                    <div className="card-image">
                                        <span className="card-notify-badge">Simple-frontend-logicbased</span>
                                        <img src={text} alt="error-project1" />
                                    </div>
                                    <div className="card-image-overly m-auto mt-3">
                                        <span className="card-detail-badge">Html</span>
                                        <span className="card-detail-badge">Css</span>
                                        <span className="card-detail-badge">JS</span>
                                        <span className="card-detail-badge">Bootstrap</span>
                                        <span className="card-detail-badge">ReactJS</span>
                                    </div>
                                    <div className="card-body text-center">
                                        <div className="ad-title m-auto">
                                            <h5 className="text-uppercase">
                                                Text-Analyze-WebApp
                                            </h5>
                                        </div>
                                        <a className='ad-btn' href="https://github.com/sravantorra1100/Text-Analyze-WebApp" target='_blank'>View</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card rounded">
                                    <div className="card-image">
                                        <span className="card-notify-badge">Simple-Tasks</span>
                                        <img src={text} alt="error-project2" />
                                    </div>
                                    <div className="card-image-overly m-auto mt-3">
                                        <span className="card-detail-badge">Html</span>
                                        <span className="card-detail-badge">Css</span>
                                        <span className="card-detail-badge">JS</span>
                                        <span className="card-detail-badge">Bootstrap</span>
                                    </div>
                                    <div className="card-body text-center">
                                        <div className="ad-title m-auto">
                                            <h5 className="text-uppercase">
                                                Todo-App
                                            </h5>
                                        </div>
                                        <a className='ad-btn' href="https://github.com/sravantorra1100" target='_blank'>View</a>
                                    </div>
                                </div>
                            </div>
                        </ Pulse>
                    </div>
                </div>

            </Pulse>
        </>
    )
}

export default Projects