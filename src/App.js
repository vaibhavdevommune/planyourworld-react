import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Mainbar from './components/mainbar';

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column gap-0">
        <Navbar />
        <div className="side-main">
          <Sidebar />
          <Mainbar />
        </div>
      </div>
    </div>
  );
}

export default App;
