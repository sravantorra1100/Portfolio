import React from 'react'
import './CertificatesLicence.css';
import freecodecamp from '../../Assets/imgs/freecodecamp.png'
import certificateJS from '../../Assets/imgs/certificateJS.jpg'
import certificateReact from '../../Assets/imgs/certificateReact.jpg'
import { FaFreeCodeCamp } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
import Pulse from 'react-reveal/Pulse';

const CertificatesLicence = () => {
  return (
    <>
      <Pulse>
        <div className="continer certificatesLicence" id="certificatesLicence">
          <h2 className='col-12 mt-3 ml-1 text-center text-uppercase'>CERTIFICATIONS & LICENCE</h2><hr />
          <p className='text-center'>
            I have done various Programming courses to increase my Programming skills and I'm sharing few of them,
          </p>
          <h3 className='col-12 mt-3 ml-1 text-center text-uppercase'>MY CERTIFICATIONS</h3><hr />
          <Pulse>
            <div className='allcards'>
              <div className="card " id="card1" >
                <img src={freecodecamp} className="card-img-top" alt="errorloading" />
                <div className="card-body">
                  <h4 className="card-title">Responsive WebDesign</h4>
                  <p className="card-text"><h5>FreeCodeCamp <FaFreeCodeCamp /></h5></p>
                  <p>Year : May-8-2024</p>
                  <a className='ad-btn' href="https://freecodecamp.org/certification/SravanTorra/responsive-web-design" target='_blank'>Check</a>
                </div>
              </div>
              <div className="card " id="card1" >
                <img src={certificateJS} className="card-img-top" alt="errorloading" />
                <div className="card-body">
                  <h4 className="card-title">Complete JavaScript</h4>
                  <p className="card-text"><h5>Udemy <SiUdemy /></h5></p>
                  <p>Year : 26-Feb-2024</p>
                  <a className='ad-btn' href="https://www.udemy.com/certificate/UC-cea70f67-cb79-420b-815d-ebff9f58572b/" target='_blank'>Check</a>
                </div>
              </div>
              <div className="card " id="card1" >
                <img src={certificateReact} className="card-img-top" alt="errorloading" />
                <div className="card-body">
                  <h4 className="card-title">The Complete ReactJS</h4>
                  <p className="card-text"><h5>Udemy <SiUdemy /></h5></p>
                  <p>Year : 20-May-2024</p>
                  <a className='ad-btn' href="https://www.udemy.com/certificate/UC-8d509baa-a84f-4eec-bd15-c166569bbd41/" target='_blank'>Check</a>
                </div>
              </div>
            </div>
          </Pulse>
        </div >
      </Pulse >
    </>
  )
}

export default CertificatesLicence