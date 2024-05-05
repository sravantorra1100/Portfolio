import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <>
            <div className="continer project">
                <h2 className='col-12 mt-3 ml-1 text-center text-uppercase'>Top Recent Projects</h2><hr />
                <p className='pb-3 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis pariatur
                    nemo reprehenderit provident odit, debitis aut accusantium omnis maxime facilis saepe totam eligendi
                    expedita nobis at reiciendis? Alias numquam et minus nisi nam inventore necessitatibus, voluptas
                    architecto aperiam, esse, cumque perferendis eius? Assumenda nisi dolorum sunt praesentium odit,
                    mollitia ducimus?</p>
                <div className="row" id='ads'>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full stack</span>
                                <img src="https://www.reliablecouriers.com/wp-content/uploads/2021/08/customers-want-their-e-commerce-goods-and-they-want-it-the-same-day.jpg" alt="error-project1" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge">Mongodb</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">
                                        Techinfoyt Shopping Website
                                    </h5>
                                </div>
                                <a className='ad-btn' href="https://github.com/techinfo-youtube/ecommerce-app-2023">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Mobile App</span>
                                <img src="https://www.etatvasoft.com/blog/wp-content/uploads/2022/08/mobile-app-development-methodologies.jpg" alt="error-project2" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">React Native</span>
                                <span className="card-detail-badge">IOS / ANDROID</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">
                                        Techinfoyt Coding App
                                    </h5>
                                </div>
                                <a className='ad-btn' href="https://github.com/techinfo-youtube/ecommerce-app-2023">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Backend</span>
                                <img src="https://letslock.com/technology/wp-content/uploads/2020/05/job.jpg" alt="error-project3" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">NoSQL</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">
                                        Techinfoyt Job Portal
                                    </h5>
                                </div>
                                <a className='ad-btn' href="#">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects