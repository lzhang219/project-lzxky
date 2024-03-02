import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.js";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import About from "./components/about";
import Login from "./components/login";
import Home from "./components/home";
import Create from "./components/create";
import Edit from "./components/edit";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
