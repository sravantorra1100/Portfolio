import './App.css';
import Layout from './Components/Layout/Layout';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Educations from './Pages/Educations/Educations';
import Projects from './Pages/Projects/Projects';
import Techstack from './Pages/Techstack/Techstack';
import WorkExp from './Pages/WorkExp/WorkExp';


function App() {
  return (
   <>
   <Layout/>
   <div className="container"><About/>
   <Educations/>
   <Techstack/>
   <Projects/>
   <WorkExp/>
   <Contact/>
   </div>
   <div className="footer mb-3 ms-3">
    <h4 className='text-center'>
      Made With 😍 Techinfoyt &copy; 2023
    </h4>
   </div>
   </>
  );
}

export default App;
