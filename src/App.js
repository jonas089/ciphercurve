import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Team from "./routes/Team";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="bg-[#012B3A] p-4 shadow-md flex justify-between items-center">
      <div className="text-white text-2xl font-bold">todo: logo</div>
      <div>
        <Link to="/" className="text-white hover:text-[#41EAD4] px-4">Home</Link>
        <Link to="/team" className="text-white hover:text-[#41EAD4] px-4">Team</Link>
      </div>
    </nav>
  );
};

const Impressum = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
      <p>Ciphercurve LLC</p>
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
        </Routes>
      </div>
      <Impressum />
    </div>
  );
};

export default App;
