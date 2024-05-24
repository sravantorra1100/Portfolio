import React, { useState } from 'react'
import './Contact.css'
import contactimg from '../../Assets/imgs/contactimg.jpg'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'
import { GoMail } from "react-icons/go";
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import { toast} from 'react-toastify';
import axios from 'axios'

const Contact = () => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    //handle submit button
    const handleSubmit =async (e) => {
        e.preventDefault()
        try {
          if(!name || !email || !msg){
            toast.error("Please Provide all Fields")
          }
          const res=await axios.post('/api/v1/portfolio/sendEmail',{name,email,msg})
          // validation and success  checking
          if(res.data.success){
            toast.success(res.data.message)
            setname("");
            setEmail("");
            setMsg("");
          }
          else{
            toast.error(res.data.message)
          }
        } catch(error) {
          console.log(error)
        }
    }

    return (
        <>
        <Pulse>
            <div className=" contact" id="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <Zoom>
                                        <img src={contactimg} alt="error contactimg" className='image' />
                                        <p className='contact-email'>Email ID - sravantorra00@gmail.com</p>
                                    </Zoom>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <Pulse>

                                <div className="card2 d-flex card border-0 px-4 py-5">
                                    <div className="row">
                                        <div className="row">
                                            <h6>Contact With
                                               <a href="https://linkedin.com/in/sravan-torra" target="_blank"  rel="noreferrer"><BsLinkedin color="blue" size={30} className='ms-2' /></a> 
                                                <a href="https://github.com/sravantorra1100" target="_blank"  rel="noreferrer"><BsGithub color="black" size={30} className='ms-2' /></a>
                                                <a href="mailto:sravantorra00@gmail.com" target="_blank"  rel="noreferrer">< GoMail color="#aa00ff" size={30} className='ms-2' /></a>
                                                <a href="https://api.whatsapp.com/send?phone=7498622598" target="_blank"  rel="noreferrer"><FaWhatsapp color="green" size={30} className='ms-2' /></a>
                                                <a href="https://facebook.com" target="_blank"  rel="noreferrer"><BsFacebook color="blue" size={30} className='ms-2' /></a>

                                            </h6>
                                        </div>


                                        <div className="row px-3 mb-4">
                                            <div className="line" />
                                            <small className="or text-center"> OR</small>
                                            <div className="line" />
                                        </div>
                                        <div className="row px-3">
                                            <input type="text" name="name" placeholder='Enter your name' className='mb-3' value={name} onChange={(e) => setname(e.target.value)} />
                                        </div>
                                        <div className="row px-3">
                                            <input type="email" name="email" placeholder='Enter your email address' className='mb-3' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="row px-3">
                                            <textarea type="text" name="msg" placeholder='write your message' className='mb-3' value={msg} onChange={(e) => setMsg(e.target.value)} />
                                        </div>
                                        <div className="row px-3">
                                            <button className='button' onClick={handleSubmit}>SEND MESSAGE</button>
                                        </div>
                                    </div>
                                </div>
                            </Pulse>
                        </div>
                    </div>
                </div>
            </div>
            </Pulse>
        </>
    )
}

export default Contact