import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/home/Homepage";

function App() {
    return (
        <>
            <Router>
              <Navbar />
                <div className="m-5 px-5">
              <Routes>
                <Route exact path="/" element={<Homepage />}></Route>
              </Routes>
                </div>
              <Footer />
            </Router>
        </>
    );
}

export default App;
