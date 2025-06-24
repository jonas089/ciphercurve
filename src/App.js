import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Team from './routes/Team';
import Projects from './routes/Projects';
import './index.css';

const Navbar = () => {
  return (
    <nav className="bg-[#012B3A] p-3 shadow-md flex justify-between items-center">
      <div>
        <img
          src="/logo02.png"
          alt="Logo"
          className="hidden md:block w-30 h-10 rounded-full"
        />
        <img
          src="/logo192.png"
          alt="Mobile Logo"
          className="block md:hidden w-15 h-10 rounded-full"
        />
      </div>
      <div className="flex space-x-2 md:space-x-4">
        <Link to="/" className="text-white hover:text-[#41EAD4] text-sm md:text-base px-2 md:px-4">
          Home
        </Link>
        <Link to="/team" className="text-white hover:text-[#41EAD4] text-sm md:text-base px-2 md:px-4">
          Team
        </Link>
        <Link to="/projects" className="text-white hover:text-[#41EAD4] text-sm md:text-base px-2 md:px-4">
          Projects
        </Link>
      </div>
    </nav>
  );
};

// ✅ DO NOT REMOVE THIS — your custom Impressum stays here
const Impressum = () => {
  return (
    <footer className="bg-[#1985A1] text-white text-center p-4 mt-auto">
      <p>Ciphercurve GmbH, 2025</p>
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
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>
      <Impressum />
    </div>
  );
};

export default App;
