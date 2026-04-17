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
    //Closes the mobile menu after a tab is selected
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
    <div>
      {/* Navigation */}
      <nav>
        <div>
          <div>

            {/* Logo */}
            <div onClick={() => handleTabChange('home')}>
              <div />
              <h1>Explorer</h1>
            </div>

            {/* Desktop Navigation */}
            <div>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                >
                  <span>{tab.label}</span>

                  {activeTab === tab.id && (
                    <div />
                  )}
                </button>
              ))}
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
export default App
