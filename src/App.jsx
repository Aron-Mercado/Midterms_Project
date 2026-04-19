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
import { 
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate
} from 'react-router-dom';
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import WildCard from './Pages/WildCard'
import Contacts from './Pages/Contacts'

//Tabs Configuration (To be used later)
// Added Paths for Routes
const tabs = [
  {
    id: 'home',
    label: 'Home',
    icon: RocketIcon,
    path: '/',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: GlobeIcon,
    path: '/projects',
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: CpuIcon,
    path: '/skills', 
  },
  {
    id: 'fun',
    label: 'Deep Space',
    icon: SparklesIcon,
    path: '/deepspace',
  },
  {
    id: 'contact',
    label: 'Contact Info',
    icon: SatelliteIcon,
    path: '/contact',
  },
]


// ***********************************************
// Star field component for the background
// StarField creates a procedural, animated space background.
const StarField = () => {
  // state is needed for React to re-render after stars are generated
  // stars → an array of star objects
  const [stars, setStars] = useState([]) //The empty dependency array runs this effect a single time and never again
  useEffect(() => {
    // Generate random stars only on client side
    const newStars = Array.from({
      // Creates an array with 150 slots
      length: 150,
    }).map((_, i) => ({
      id: i,
      // Each value comes from a random number between 0 and 1 generated at runtime, 
      // which is then scaled to a specific range so every star has a unique size, position, speed, and delay.

      
      //  Random position in percentages
      x: Math.random() * 100,
      y: Math.random() * 100,
      // Random size between 1px and 3px
      size: Math.random() * 2 + 1,
      // Random animation length
      duration: Math.random() * 3 + 2,
      // Random animation start delay
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
          className="star" // CSS animation lives here
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
  // Tracking the active tab by deriving it from the URL.
  const location = useLocation()
  // navigate() updates the browser history
  const navigate = useNavigate()
  // useLocation() gives you /projects, /skills, etc.
  // You match that path to a tab
  // The matching tab becomes “active”
  const activeTab =
    tabs.find((tab) => tab.path === location.pathname)?.id || 'home'
  // React Router reacts to the URL change
  // <Routes> re-renders the correct page
  const handleTabChange = (tabId) => {
    const tab = tabs.find((t) => t.id === tabId)
    if (tab) {
      navigate(tab.path)
    }
  }
 
  /*
    Click tab
      ↓
    navigate(path)
      ↓
    Browser URL changes
      ↓
    React Router notices the change
      ↓
    useLocation() updates
      ↓
    App re-renders
      ↓
    activeTab is recalculated
      ↓
    <Routes> picks the page to render
    */

  return (
    
    <div className="min-h-screen w-full bg-violet-950 text-slate-200 relative selection:bg-violet-500/30">
            <StarField />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="shrink-0 flex items-center gap-2 group cursor-pointer"
              onClick={() => handleTabChange('home')}
            >
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center p-0.5 group-hover:glow-border transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                  <RocketIcon className="w-5 h-5 text-violet-400 group-hover:text-fuchsia-400 transition-colors" />
                </div>
              </div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-violet-400 to-fuchsia-400 tracking-wider uppercase">
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
                        className="absolute inset-0 bg-linear-to-r from-violet-500/20 to-fuchsia-500/20 rounded-xl border border-violet-500/30"
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
      <main className="pt-20 min-h-[110vh] relative z-10">
        {/* The URL now drives which tab is shown, and AnimatePresence still handles transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
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
            {/* <Routes> replaces the switch/case renderActiveTab function */}
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/fun" element={<WildCard />} />
              <Route path="/contact" element={<Contacts />} />
              {/* /asdf → redirects to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
