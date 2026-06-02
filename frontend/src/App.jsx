import { useEffect, useState } from 'react'

// import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
// import Services from './pages/Services'
import Career from './pages/Career'
import Partnerships from './pages/Partnerships'
import Contact from './pages/Contact'
import Services from "./pages/Services"
import ManagedWifi from './pages/product_Services/ManagedWifi'
import {Route, Routes } from 'react-router-dom'
import DataCenterCloud from './pages/product_Services/DataCenterCloud'
import SoftwareLicence from './pages/product_Services/SoftwareLicence'
import ManageSecurity from './pages/product_Services/ManageSecurity'
import ITArchitecture from './pages/product_Services/Telecom'
import WhatsappChat from './components/WhatsappChat'
import Communication from './pages/product_Services/Communication'
import Hardware from './pages/product_Services/Hardware'
import SurveillanceSolution from './pages/product_Services/Survillance'
import TelecomServices from './pages/product_Services/Telecom'
import GovSlider from './components/GovSlider'
import PrivSlider from './components/PrivSlider'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import BlogPage from './pages/BlogPage'
import SingleBlog from './pages/SingleBlog'
// import Popup from './components/Popup'
// import Loader from './components/Loader'



  
function App() {


  //   const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const loader = document.querySelector(".loader-wrapper");
  //     if (loader) {
  //       loader.classList.add("fade-out");
  //     }

  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 500);
  //   }, 1200); // loader duration

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
    {/* {loading ? (
      <Loader />
    ) : ( */}
      <>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/managed-wifi' element={<ManagedWifi />} />
          <Route path="/cloud-data-center" element={<DataCenterCloud/>}/>
          <Route path='/software-licence' element={<SoftwareLicence/>}/>
          <Route path="/manage-security" element={<ManageSecurity/>}/>
          <Route path='/product-services' element={<Services/>} />
          <Route path="/chat" element={<WhatsappChat/>}/>
          <Route path='/career' element={<Career />} />
          <Route path='/partnerships' element={<Partnerships />} />
          <Route path='/hardware' element={<Hardware/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/communication-collaboration' element={<Communication/>} />
          <Route path='/surveillance' element={<SurveillanceSolution/>} />
          <Route path='/telecom' element={<TelecomServices/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/terms-conditions' element={<TermsConditions/>} />
          <Route path='/blog' element= {<BlogPage/>} />
          <Route path='/blog/:slug' element={<SingleBlog/>} />
          {/* <Route path='/Popup' element= {<Popup/>} /> */}
        </Routes>
      </>
    {/* )} */}
  </>
  )
}

export default App
 