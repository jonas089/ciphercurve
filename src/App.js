import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Team from "./routes/Team";
import Clients from "./routes/Clients"
import "./index.css";
import Projects from './routes/Projects';

const Navbar = () => {
  return (
    <nav className="bg-[#012B3A] p-4 shadow-md flex justify-between items-center">
      <div>
        {/* Desktop Logo */}
        <img
          src="/logo02.png"
          alt="Logo"
          className="hidden md:block w-30 h-12 rounded-full"
        />
        {/* Mobile Logo */}
        <img
          src="/logo192.png"
          alt="Mobile Logo"
          className="block md:hidden w-30 h-12 rounded-full"
        />
      </div>
      <div>
        <Link to="/" className="text-white hover:text-[#41EAD4] px-4">Home</Link>
        <Link to="/team" className="text-white hover:text-[#41EAD4] px-4">Team</Link>
        <Link to="/clients" className="text-white hover:text-[#41EAD4] px-4">Clients</Link>
        <Link to="/projects" className="text-white hover:text-[#41EAD4] px-4">Projects</Link>
      </div>
    </nav>
  );
};

const Impressum = () => {
  return (
    <footer className="bg-[#1985A1] text-white text-center p-4 mt-auto">
      <p>Ciphercurve LLC, 2025</p>
      <p>Zugerstrasse 32, 6341 Zug-Baar</p>
      <p>Email: contact@ciphercurve.com</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="clients" element={<Clients />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>
      <Impressum />
    </div>
  );
};

export default App;
