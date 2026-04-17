import './App.css';
import React, { useEffect, useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import { Home } from './Pages/Home'
import { Projects } from './Pages/Projects'
import { Skills } from './Pages/Skills'
import { WildCard } from './Pages/WildCard'
import { Contacts } from './Pages/Contacts'

const tabs = [
  { id: 'home', label: 'Mission Control' },
  { id: 'projects', label: 'Missions' },
  { id: 'skills', label: 'Systems' },
  { id: 'fun', label: 'Deep Space' },
  { id: 'contact', label: 'Comms' },
]

function App() {
  return (
    <div>

    {/* Navigation */}
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/Projects">Projects</Link> |{" "}
      <Link to="/Contacts">Contacts</Link>
    </nav>

    {/* Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contacts" element={<Contacts />} />
    </Routes>

    </div>
  );
}
export default App
