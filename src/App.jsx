import { useState, useEffect } from "react";
import "./App.css";
import Splash from "./pages/splash/Splash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OtpVerificationPage from "./Pages/Otp/OtpVerificationPage";
import RegistrationPage from "./Pages/Registration/RegistrationPage";
import LoginPage from "./Pages/Login/LoginPage";
import AddLocation from "./Pages/AddLocation/AddLocation";
import Profile from "./Pages/Profile/Profile";
import CustomerSupport from "./Pages/CustomerSupport/CustomerSupport";
import Accessories from "./Pages/Accessories/Accessories";
import Subscription from "./Pages/Subscription/Subscription";
import SubscribeNow from "./Pages/SubscribeNow/SubscribeNow";
import Payment from "./Pages/Payment/Payment";
import Chat from "./Pages/Chat/Chat";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showSplash ? (
        <Splash />
      ) : (
        <Routes>
          <Route path="/" exact element={<div>homepage</div>} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/otp" element={<OtpVerificationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add-location" element={<AddLocation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/subscribe-now" element={<SubscribeNow />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
