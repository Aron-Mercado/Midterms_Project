//Adding Lucid Icons and React Motion
import { motion } from "motion/react";
import { RocketIcon } from 'lucide-react';

import './App.css';
import React, { useEffect, useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import WildCard from './Pages/WildCard'
import Contacts from './Pages/Contacts'

//Tabs Configuration (To be used later)
const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'fun', label: 'Deep Space' },
  { id: 'contact', label: 'Contact Info' },
]

// Main Component
function App() {

    // State Variables 
    //Keeps track of which “page” is currently shown
    //Default value is 'home', so <Home /> shows first
    const [activeTab, setActiveTab] = useState('home')

    //Updates the currently active tab
    /*
      Re-runs the App() function
      Re-evaluates JSX
      Updates only the parts that depend on activeTab
    */
    const handleTabChange = tabId => {
    setActiveTab(tabId)
  }

    //Checks the value of activeTab
    //Based on that value, it renders a specific component
    const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'projects':
        return <Projects />
      case 'skills':
        return <Skills />
      case 'fun':
        return <WildCard />
      case 'contact':
        return <Contacts />
      default:
        return <Home />
    }
  }


  return (
    <div className="min-h-screen w-full bg-violet-950 text-slate-200 relative selection:bg-violet-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="shrink-0 flex items-center gap-2 group cursor-pointer"
              onClick={() => handleTabChange('home')}
            >
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 
                              flex items-center justify-center p-0.5 
                              group-hover:glow-border transition-all duration-300"
                              >
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                  <RocketIcon className="w-5 h-5 text-violet-400 group-hover:text-fuchsia-400 transition-colors" />
                </div>
              </div>
              <h1 className="text-xl font-bold bg-clip-text 
                             text-transparent bg-linear-to-br from-violet-400 to-fuchsia-400 
                             tracking-wider uppercase"
                             >
                Explorer
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {tabs.map((tab) => {
                //const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative px-4 py-2.5 rounded-xl flex items-center space-x-2 
                                transition-all duration-300 
                                ${isActive ? 'text-white' : 'text-slate-400 hover:text-violet-300 hover:bg-white/5'}`}
                  >

                    <span className="font-medium tracking-wide text-sm uppercase">
                      {tab.label}
                    </span>
                    
                  </button>
                )
              })}
            </div>
          </div>
          </div>
      </nav>

      <main>
        <div key={activeTab}>
          {renderActiveTab()}
        </div>
      </main>

      </div>
  );
}

export default App;
