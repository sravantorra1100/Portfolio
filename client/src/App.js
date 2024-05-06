import './App.css';
import Layout from './Components/Layout/Layout';
import About from './Pages/About/About';
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
   </div>
   </>
  );
}

export default App;
