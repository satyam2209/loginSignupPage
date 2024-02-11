import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Page from "./page";
import ProfilePage from "./components/ProfilePage";
import ConfirmationPage from "./components/ConfirmationPage";
import ForgetPassword from "./components/ForgetPassword";


const App = () => {
  return (
    <div className="app">
      <Router>
      <Routes>
      <Route path="/" element={<Login />}/>                 
      <Route path="/forgetpass" element={<ForgetPassword />}/>                 
      <Route path="/signup" element={<Signup />}/>
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/confirmation" element={<ConfirmationPage />}/>
      <Route path="/*" element={<Page/>}/> 
      </Routes>
      </Router>
      
    </div>
  );
};

export default App;

 