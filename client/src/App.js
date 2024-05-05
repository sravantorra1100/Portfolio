import './App.css';
import Layout from './Components/Layout/Layout';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Techstack from './Pages/Techstack/Techstack';


function App() {
  return (
   <>
   <Layout/>
   <div className="container"><About/>
   <Techstack/>
   <Projects/>
   </div>
   </>
  );
}

export default App;
