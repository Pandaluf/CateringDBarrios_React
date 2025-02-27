import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./home/Home.tsx";
import Navbar from "../components/navbar/Navbar.tsx";
import Services from "./services/Services.tsx";

function App() {

  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Services />} />
            {/*<Route path="/about" element={<Home />} />*/}
            {/*<Route path="/contact" element={<Home />} />*/}
        <Route path="/complaint" element={<Home />} />
        </Routes>
    </>
  )
}

export default App
