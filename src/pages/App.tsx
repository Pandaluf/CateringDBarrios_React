import './App.css'
import {Route, Routes} from "react-router-dom";
import Navbar from "../components/navbar/Navbar.tsx";
import Services from "./services/Services.tsx";
import Footer from "../components/footer/footer.tsx";
import Complaint from "./complaint/Complaint.tsx";

function App() {

  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/complaint" element={<Complaint />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
