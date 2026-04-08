import { useState } from 'react'

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
import ITInfrastructure from './pages/product_Services/ITInfrastructure'
import DataCenterCloud from './pages/product_Services/DataCenterCloud'
import SoftwareLicence from './pages/product_Services/SoftwareLicence'
import ManageSecurity from './pages/product_Services/ManageSecurity'
import ITArchitecture from './pages/product_Services/Telecom'
import WhatsappChat from './components/WhatsappChat'
import Communication from './pages/product_Services/Communication'
import Hardware from './pages/product_Services/Hardware'
import SurveillanceSolution from './pages/product_Services/Survillance'
// import Popup from './components/Popup'

 
function App() {

  return (
    <>
      <Navbar />
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/managed-wifi' element={<ManagedWifi />} />
          <Route path='/it-infra' element={<ITInfrastructure/>}/>
          <Route path="/cloud-data-center" element={<DataCenterCloud/>}/>
          <Route path='/software-licence' element={<SoftwareLicence/>}/>
          <Route path="/manage-security" element={<ManageSecurity/>}/>
          <Route path="/it-architecture" element={<ITArchitecture/>}/>
          <Route path='/product-services' element={<Services/>} />
          <Route path="/chat" element={<WhatsappChat/>}/>
          {/* <Route path='/popup' element= {<Popup />}/> */}
          <Route path='/career' element={<Career />} />
          <Route path='/partnerships' element={<Partnerships />} />
          <Route path='/hardware' element={<Hardware/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/communication-collaboration' element={<Communication/>} />
          <Route path='/survillance' element={<SurveillanceSolution/>} />
        </Routes>
      
    </>
  )
}

export default App
