import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Ourservices from './components/Ourservices';
import LeadingHealthcare from './components/LeadingHealthcare';
import MobileApps from './components/MobileApps';
import Testimonials from './components/Testimonials';
// import SlidebarEllipse from './components/SlidebarEllipse';
import LatestArticle from './components/LatestArticle';
import Footer from './components/Footer';




function App() {


  return (
    <>
    <Navbar />
    <Header />
    <Ourservices />
    <LeadingHealthcare />
    <MobileApps />
    <Testimonials />
    {/* <SlidebarEllipse /> */}
    <LatestArticle />
    <Footer />
    
    </>
  )
}

export default App
