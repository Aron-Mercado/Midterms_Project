import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TelescopeIcon,
} from 'lucide-react'

/* =======================
   DATA
======================= */

// Used by the Intercepted Transmissions quote carousel
// Indexed using currentQuote
const quotes = [
  {
    text: 'There is no sound in space, but my code still screams when it compiles.',
    author: 'Unknown Astronaut',
  },
  {
    text: 'Life is like a box of chocolates—mostly disappointing, occasionally great, and somehow still addictive.',
    author: 'Unknown Pilot',
  },
  {
    text: '“If life gives you lemons, make lemonade. If it keeps giving you lemons, maybe ask what you did to deserve this.”',
    author: 'Unknown Operator',
  },
  {
    text: "I’m not lost—I’m just aggressively exploring.    ",
    author: 'Unknown Rover',
  },
  {
    text: 'Life has no instruction manual, but plenty of error messages.',
    author: 'Unknown Satellite',
  },
]

const planetData = [
  {
    id: 1,
    name: 'Mercury',
    color: 'bg-gradient-to-br from-gray-400 to-gray-600',
    size: 'w-16 h-16',
    ring: false,
  },
  {
    id: 2,
    name: 'Mars',
    color: 'bg-gradient-to-br from-red-500 to-orange-600',
    size: 'w-20 h-20',
    ring: false,
  },
  {
    id: 3,
    name: 'Saturn',
    color: 'bg-gradient-to-br from-yellow-200 to-amber-400',
    size: 'w-24 h-24',
    ring: true,
  },
  {
    id: 4,
    name: 'Neptune',
    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
    size: 'w-20 h-20',
    ring: false,
  },
  {
    id: 5,
    name: 'Venus',
    color: 'bg-gradient-to-br from-orange-300 to-yellow-500',
    size: 'w-18 h-18',
    ring: false,
  },
  {
    id: 6,
    name: 'Uranus',
    color: 'bg-gradient-to-br from-cyan-300 to-teal-500',
    size: 'w-16 h-16',
    ring: false,
  },
]

/* =======================
   COMPONENT
======================= */

function WildCard() {

  // Index of the displayed quote  
  const [currentQuote, setCurrentQuote] = useState(0)
  // Active meteor objects being animated
  const [meteors, setMeteors] = useState([])
  // How many times user triggered meteor showers
  const [meteorShowerCount, setMeteorShowerCount] = useState(0)

  // Cycles forward
  // % quotes.length prevents overflow
  const nextQuote = () =>
    setCurrentQuote((prev) => (prev + 1) % quotes.length)

  // Cycles backward safely
  // Adds quotes.length to prevent negative numbers
  const prevQuote = () =>
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)

  const summonMeteorShower = () => {
    // Creates 25–35 meteors randomly
    const count = 25 + Math.floor(Math.random() * 10)
    const newMeteors = Array.from({ length: count }).map((_, i) => ({
      // Math Logic a bit similar to the Background Stars
      id: Date.now() + i,
      startX: Math.random() * 100,
      startY: Math.random() * 60 - 20,
      delay: Math.random() * 0.8,
      duration: 1.2 + Math.random() * 0.8,
    }))

    setMeteors(newMeteors)
    setMeteorShowerCount((prev) => prev + 1)

    // Clears meteors after animation finishes
    setTimeout(() => setMeteors([]), 3000)
  }

  return (
    <div className="w-full min-h-screen px-4 py-12 relative overflow-hidden">

      
      {/* METEOR SHOWER OVERLAY */}
      {/* 
        Fixed positioning → overlays entire screen
        Pointer-events-none → doesn’t block clicks
        AnimatePresence enables smooth removal
        Uses VW / VH units, so animation adapts to screen size
      */} 
      <AnimatePresence>
        {meteors.map((meteor) => (
          <motion.div
            key={meteor.id}
            initial={{
              x: `${meteor.startX}vw`,
              y: `${meteor.startY}vh`,
              opacity: 0,
            }}
            animate={{
              x: `${meteor.startX - 50}vw`,
              y: `${meteor.startY + 100}vh`,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: meteor.duration,
              delay: meteor.delay,
              ease: 'linear',
            }}
            className="fixed pointer-events-none z-50"
            style={{
              width: '3px',
              height: '60px',
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(147,197,253,0.6), transparent)',
              boxShadow:
                '0 0 8px rgba(255,255,255,0.8), 0 0 15px rgba(147,197,253,0.5)',
              transform: 'rotate(45deg)',
              borderRadius: '50%',
            }}
          />
        ))}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto space-y-12">

    {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 flex items-center justify-center gap-4 uppercase tracking-wider">
            <div className="w-10 h-10 text-fuchsia-500" />
            Deep Space
            <div className="w-10 h-10 text-fuchsia-500 transform scale-x-[-1]" />
          </h2>
          <p className="text-lg text-slate-400 font-light">
            Anomalies, transmissions, and recreational logs from the outer rim.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Quote Carousel - Spans full width */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="md:col-span-12 glass-panel rounded-3xl p-8 md:p-12 border-violet-500/30 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50" />

            <h3 className="text-sm font-mono text-violet-400 mb-8 text-center uppercase tracking-widest">
              Intercepted Transmissions
            </h3>

            <div className="relative min-h-[120px] flex items-center justify-center">
              <button
                onClick={prevQuote}
                className="absolute left-0 md:left-8 p-3 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-violet-500/20 transition-all border border-transparent hover:border-violet-500/30"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuote}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    filter: 'blur(10px)',
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.1,
                    filter: 'blur(10px)',
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="px-16 md:px-32 text-center"
                >
                  <p className="text-xl md:text-3xl text-slate-200 font-light italic mb-6 leading-relaxed">
                    "{quotes[currentQuote].text}"
                  </p>
                  <p className="text-fuchsia-400 font-mono text-sm tracking-widest uppercase">
                    — {quotes[currentQuote].author}
                  </p>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={nextQuote}
                className="absolute right-0 md:right-8 p-3 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-violet-500/20 transition-all border border-transparent hover:border-violet-500/30"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

        {/* METEOR + PLANETS SIDE-BY-SIDE */}

          {/* Meteor Shower Button */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="md:col-span-7 glass-panel rounded-3xl p-8 border-cyan-500/30 flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjAuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-40" />

            <h3 className="text-xl font-bold text-white mb-2 relative z-10">
              Meteor Shower Control
            </h3>
            <p className="text-slate-400 text-sm mb-8 relative z-10">
              Summon a cosmic spectacle across the void
            </p>

            <motion.button
              onClick={summonMeteorShower}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="relative z-10 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full font-bold uppercase tracking-widest text-sm flex items-center space-x-3 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] mb-6"
            >
              <div className="w-5 h-5" />
              <span>Initiate Shower</span>
            </motion.button>

            <div className="relative z-10">
              <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">
                Showers Summoned
              </p>
              <motion.p
                key={meteorShowerCount}
                initial={{
                  scale: 1.3,
                  color: '#fff',
                }}
                animate={{
                  scale: 1,
                  color: '#22d3ee',
                }}
                className="text-3xl font-bold font-mono"
              >
                {meteorShowerCount.toString().padStart(3, '0')}
              </motion.p>
            </div>
          </motion.div>

          {/* PLANETARY FIDGET ZONE */}
          {/* Draggable Planets */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }}
            className="md:col-span-5 glass-panel rounded-3xl p-8 border-violet-500/30 relative overflow-hidden"
          >
            <h3 className="text-sm font-mono text-violet-400 mb-6 text-center uppercase tracking-widest">
              Planetary Fidget Zone
            </h3>
            <p className="text-slate-400 text-xs text-center mb-6">
              Drag the planets around • Rearrange the cosmos
            </p>

            <div className="relative w-full h-[300px] bg-slate-900/30 rounded-2xl border border-slate-700/50 overflow-hidden">
              {/*
                Planets are draggable (drag)
                Elasticity prevents wild movement (dragElastic)
                Constraints keep planets inside the container (dragConstraints)
              */}
              {planetData.map((planet, index) => (
                <motion.div
                  key={planet.id}
                  drag
                  dragConstraints={{
                    top: 0,
                    left: 0,
                    right: 250,
                    bottom: 250,
                  }}
                  dragElastic={0.1}
                  whileDrag={{
                    scale: 1.1,
                    cursor: 'grabbing',
                    zIndex: 50,
                  }}
                  initial={{
                    x: (index % 3) * 80 + 20,
                    y: Math.floor(index / 3) * 100 + 30,
                  }}
                  className="absolute cursor-grab"
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      className={`${planet.size} ${planet.color} rounded-full shadow-lg relative`}
                      style={{
                        boxShadow:
                          '0 4px 20px rgba(0,0,0,0.3), inset 0 -2px 10px rgba(0,0,0,0.3)',
                      }}
                    >
                      {/* Transformed with rotateX to fake 3D depth */}
                      {planet.ring && (
                        <div
                          className="absolute inset-0 border-4 border-amber-300/40 rounded-full"
                          style={{
                            transform: 'rotateX(75deg) scale(1.4, 0.5)',
                            transformStyle: 'preserve-3d',
                          }}
                        />
                      )}
                    </motion.div>
                    <p className="text-[10px] text-slate-400 text-center mt-1 font-mono uppercase tracking-wider">
                      {planet.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default WildCard