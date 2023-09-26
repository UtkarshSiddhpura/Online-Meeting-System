import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard.jsx";
import Header from "./component/Header.jsx";
import Home from "./component/Home.jsx";
import Auth from "./component/Auth";
import Footer from "./component/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
