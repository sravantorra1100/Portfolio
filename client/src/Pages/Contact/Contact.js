import React from 'react'
import './Contact.css'
import { BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs'

const Contact = () => {
    return (
        <>
            <div className=" contact" id="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <img src="https://thumbs.dreamstime.com/b/contact-us-button-computer-keyboard-d-rendering-110961852.jpg" alt="error contact" className='image'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                                <div className="card2 d-flex card border-0 px-4 py-5">
                                <div className="row">
                                    <div className="row">
                                    <h6>Contact With 
                                        <BsLinkedin color="blue" size={30}className='ms-2'/>
                                        <BsGithub color="black" size={30}className='ms-2'/>
                                        <BsFacebook color="blue" size={30}className='ms-2'/>
                                    </h6>
                                    </div>
                                    
                                
                                <div className="row px-3 mb-4">
                                    <div className="line" />
                                    <small className="or text-center"> OR</small>
                                    <div className="line" />
                                </div>
                                <div className="row px-3">
                                    <input type="text" name="name" placeholder='Enter your name' className='mb-3' />
                                </div>
                                <div className="row px-3">
                                    <input type="email" name="email" placeholder='Enter your email address' className='mb-3' />
                                </div>
                                <div className="row px-3">
                                    <textarea type="text" name="msg" placeholder='write your message' className='mb-3' />
                                </div>
                                <div className="row px-3">
                                    <button className='button' type="submit">SEND MESSAGE</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact