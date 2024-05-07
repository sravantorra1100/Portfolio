import React from 'react'
import Typewriter from 'typewriter-effect';
import './Home.css';
import Resume from '../../Assets/docs/resume.txt'
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <h2>Hi 👋 i'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["FullStack Developer!",
                  "Mern Stack Developer!",
                  "React native Developer!"],               // remove   React native Developer
                autoStart: true,
                loop: true,
              }} />
          </h1>
          <div className="home-buttons">
            <button className='btn btn-hire'>Hire Me</button>
            <a className='btn btn-cv' href={Resume} download="your-name.pdf" >My Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home