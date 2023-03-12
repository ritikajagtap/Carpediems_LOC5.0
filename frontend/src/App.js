import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/home/Homepage";
import Api from "./components/home/Api";
import MerchantPortal from "./components/auth/MerchantPortal";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/merchant/Dashboard";
import Giftcards from "./components/merchant/GiftCards";
import CreateGiftCard from "./components/merchant/CreateGiftCard";
import StaticCoupon from "./components/merchant/StaticCoupon";
import CreateStaticCoupon from "./components/merchant/CreateStaticCoupon";

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
                <Route exact path="/api-reference" element={<Api />}></Route>
                {localStorage.getItem('token')} && <Route exact path="/dashboard" element={<Dashboard />}></Route>
                {localStorage.getItem('token')} && <Route exact path="/giftcards" element={<Giftcards />}></Route>
                {localStorage.getItem('token')} && <Route exact path="/new-gift-card" element={<CreateGiftCard />}></Route>
                {localStorage.getItem('token')} && <Route exact path="/static-coupons" element={<StaticCoupon />}></Route>
                {localStorage.getItem('token')} && <Route exact path="/new-static-coupon" element={<CreateStaticCoupon />}></Route>
              </Routes>
                </div>
              <Footer />
            </Router>
        </>
    );
}

export default App;
