import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import './Home.css';
import { BsFillMoonStarsFill,BsFillSunFill } from 'react-icons/bs'
import Fade from 'react-reveal/Fade';
import Resume from '../../Assets/docs/resume.txt'


const Home = () => {
  const [theme, setTheme] = useTheme()
//handle theme
const handleTheme=()=>{
  setTheme((prevState)=>(prevState ==='light'?'dark':'light'));
}

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (<BsFillMoonStarsFill size={30}/>): (<BsFillSunFill size={30}/>)}
        </div>
        <div className="container home-content">
          <Fade right>
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
          </Fade>
          <Fade bottom>
          <div className="home-buttons">
            <button className='btn btn-hire'>Hire Me</button>
            <a className='btn btn-cv' href={Resume} download="your-name.pdf" >My Resume</a>
          </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Home