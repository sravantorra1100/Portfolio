import './App.css';
import Layout from './Components/Layout/Layout';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Educations from './Pages/Educations/Educations';
import Projects from './Pages/Projects/Projects';
import Techstack from './Pages/Techstack/Techstack';
import WorkExp from './Pages/WorkExp/WorkExp';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext';
import Tada from 'react-reveal/Tada';
import MobileNav from './Components/MobileNav/MobileNav';
import CertificatesLicence from './Pages/CertificatesLicence/CertificatesLicence';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [theme] = useTheme()
  return (
    <>
      <div id={theme}>
      <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container"><About />
          <Educations />
          <CertificatesLicence />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className='text-center footerspace'>
              Copyright &copy; 2024 Sravan. All Rights Reserved.
            </h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop smooth color="#f29f67" style={{ backgroundColor: '#1e1e2c', borderRadius: '80px' }} />

    </>
  );
}

export default App;
