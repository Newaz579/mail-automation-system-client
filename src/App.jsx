import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SendMultipleEmails from "./pages/SendMultipleEmails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send-multiple-emails" element={<SendMultipleEmails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
