//App.jsx serves as the main hub for the webpage, displaying only the selected content

//Adding Lucid Icons and React Motion
import { motion, AnimatePresence } from "motion/react";
import { 
  RocketIcon,
  GlobeIcon,
  CpuIcon,
  SparklesIcon,
  SatelliteIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';

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
  {
    id: 'home',
    label: 'Mission Control',
    icon: RocketIcon,
  },
  {
    id: 'projects',
    label: 'Missions',
    icon: GlobeIcon,
  },
  {
    id: 'skills',
    label: 'Systems',
    icon: CpuIcon,
  },
  {
    id: 'fun',
    label: 'Deep Space',
    icon: SparklesIcon,
  },
  {
    id: 'contact',
    label: 'Comms',
    icon: SatelliteIcon,
  },
]


// ***********************************************
// Star field component for the background (got a lot of various help for this)
const StarField = () => {
  const [stars, setStars] = useState([])
  useEffect(() => {
    // Generate random stars only on client side
    const newStars = Array.from({
      length: 150,
    }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }))
    setStars(newStars)
  }, [])
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-space-gradient">
      {/* Nebula effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-900/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-900/20 blur-[150px]" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-cyan-900/10 blur-[100px]" />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--duration': `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
// ***********************************************

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
            <StarField />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex-shrink-0 flex items-center gap-2 group cursor-pointer"
              onClick={() => handleTabChange('home')}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center p-[2px] group-hover:glow-border transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                  <RocketIcon className="w-5 h-5 text-violet-400 group-hover:text-fuchsia-400 transition-colors" />
                </div>
              </div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 tracking-wider uppercase">
                Explorer
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative px-4 py-2.5 rounded-xl flex items-center space-x-2 transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-400 hover:text-violet-300 hover:bg-white/5'}`}
                  >
                    <Icon
                      className={`w-4 h-4 ${isActive ? 'text-fuchsia-400' : ''}`}
                    />
                    <span className="font-medium tracking-wide text-sm uppercase">
                      {tab.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-xl border border-violet-500/30"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

      </nav>

      {/* Main Content */}
      <main className="pt-20 min-h-screen relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: 'blur(4px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
              filter: 'blur(4px)',
            }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
            }}
          >
            {renderActiveTab()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
