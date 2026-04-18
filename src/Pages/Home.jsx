import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRightIcon,
  Computer,
  Book,
  MailIcon,
  TerminalIcon,
  OrbitIcon,
} from 'lucide-react'

/*
    TO DO LIST:
    1. DECONSTRUCT
        1.a BASE ELEMENTS
        2.a DESIGN
        3.a TEST ANMATIONS
*/

function Home() {

return (
<div className="w-full min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="space-y-8 relative z-10"
          >
            {/* Decorative badge */}
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
                delay: 0.2,
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-violet-500/30 text-violet-300 text-sm font-medium tracking-wide uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
              Commander Online
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="text-5xl md:text-7xl font-bold text-white tracking-tight"
              >
                Alex{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  Morgan
                </span>
              </motion.h1>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="text-2xl md:text-3xl font-light text-slate-300 flex items-center gap-3"
              >
                <TerminalIcon className="w-8 h-8 text-cyan-400" />
                Intergalactic Developer
              </motion.h2>
            </div>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              className="text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              Navigating the cosmos of code. I engineer robust digital
              ecosystems and craft stellar user experiences that push the
              boundaries of the known web.
            </motion.p>

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
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-xl font-medium flex items-center space-x-2 transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] hover:-translate-y-1">
                <span>Launch Missions</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 glass-panel hover:bg-white/10 text-slate-200 rounded-xl font-medium transition-all hover:-translate-y-1 border border-slate-700 hover:border-violet-400/50">
                Access Logs (Resume)
              </button>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
              }}
              className="flex items-center space-x-6 pt-8 border-t border-slate-800/50"
            >
              <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">
                Comms Channels:
              </span>
              <a
                href="#"
                className="text-slate-400 hover:text-fuchsia-400 transition-colors hover:scale-110 transform duration-200"
              >
                <Computer className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200"
              >
                <Book className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-violet-400 transition-colors hover:scale-110 transform duration-200"
              >
                <MailIcon className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Stylized Image/Graphic */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: 'spring',
            }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Orbital rings */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full border border-violet-500/20 border-dashed"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-8 rounded-full border border-fuchsia-500/20"
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-fuchsia-500 rounded-full shadow-[0_0_10px_#d946ef] -translate-x-1/2 -translate-y-1/2" />
              </motion.div>
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-16 rounded-full border border-cyan-500/30 border-dotted"
              >
                <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] translate-x-1/2" />
              </motion.div>

              {/* Center Avatar/Planet */}
              <div className="absolute inset-24 rounded-full overflow-hidden border-4 border-slate-900 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-900 to-fuchsia-900 opacity-50 mix-blend-overlay z-10" />
                <img
                  src="https://picsum.photos/800/800?random=1"
                  alt="Commander"
                  className="w-full h-full object-cover filter contrast-125 saturate-50"
                />
              </div>

              {/* Floating tech icons */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-10 right-10 glass-panel p-4 rounded-2xl border-violet-500/30"
              >
                <OrbitIcon className="w-8 h-8 text-violet-400" />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute bottom-20 left-4 glass-panel p-4 rounded-2xl border-cyan-500/30"
              >
                <TerminalIcon className="w-8 h-8 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
)
}

export default Home;