import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import Services from "./pages/Services"
import MatMedManagement from "./pages/MatMedManagement"
import OutpatientLevels from "./pages/OutpatientLevels"
import ConcentrationAcceleration from "./pages/ConcentrationAcceleration"
import IndividualServices from "./pages/IndividualServices"
import CustomCursor from "./components/Cursor/CustomCursor"
import PhoneButton from "./components/CallButton"
import About from "./pages/About"
import Contact from "./pages/Contact"
import PrivacyPolice from "./pages/Privacy"

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <CustomCursor/>
       <PhoneButton position="bottom-right" />
       <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mat-med-management" element={<MatMedManagement />} />
          <Route path="/outpatient-levels-of-care" element={<OutpatientLevels />} />
          <Route path="/IndividualServices" element={<IndividualServices/>} />
          <Route path="/concentration-acceleration-program" element={<ConcentrationAcceleration />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolice />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
