import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/home/Homepage";
import MerchantPortal from "./components/auth/MerchantPortal";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
    return (
        <>
            <Router>
              <Navbar />
                <div className="m-5 px-5">
              <Routes>
                <Route exact path="/" element={<Homepage />}></Route>
                <Route exact path="/merchant-portal" element={<MerchantPortal />}></Route>
                <Route exact path="/register" element={<Register />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
              </Routes>
                </div>
              <Footer />
            </Router>
        </>
    );
}

export default App;
