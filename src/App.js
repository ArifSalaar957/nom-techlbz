import './App.css';
import React, { useEffect } from 'react'
import About from './Pages/About';
import Contact from './Pages/Contact'
import Blog from './Pages/Blog';
import AllBlogs from './Pages/AllBlogs';
import TermsofServices from './Pages/TermsofServices';
import ReturnPolicy from './Pages/ReturnPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import Login from './Pages/Login';
import Forum1 from './Pages/Forum1';
import Forum2 from './Pages/Forum2';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from './firebase/Config';
import { useState } from 'react';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(()=>{
auth.onAuthStateChanged((user)=>{
if(user){
  setUserName(user.displayName)
  setIsLoggedIn(true);
}else setUserName("")
})
  }, [])
  
  return (
    <>

    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Navigate to = "/login" />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/about" element={<About name = {userName} />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/all_blogs" element={<AllBlogs />} />
          <Route path="/terms_&_services" element={<TermsofServices />} />
          <Route path="/refund_policy" element={<RefundPolicy />} />
          <Route path="/return_policy" element={<ReturnPolicy />} />
          <Route path="/shipping_policy" element={<ShippingPolicy />} />
          <Route path="/forum1" element={<Forum1 />} />
          <Route path="/forum2" element={<Forum2 />} />
       </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
