import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MailIcon,
  Computer,
  Book,
  Bird,
  SendIcon,
  SatelliteIcon,
  MapPinIcon,
} from 'lucide-react'

function Contacts() {
  
  const socialLinks = [
    {
      icon: Computer,
      label: 'GitHub',
      url: '#',
      color: 'text-slate-300 hover:text-white',
      bg: 'hover:bg-slate-800',
    },
    {
      icon: Book,
      label: 'LinkedIn',
      url: '#',
      color: 'text-blue-400 hover:text-blue-300',
      bg: 'hover:bg-blue-900/30',
    },
    {
      icon: MailIcon,
      label: 'Email',
      url: '#',
      color: 'text-fuchsia-400 hover:text-fuchsia-300',
      bg: 'hover:bg-fuchsia-900/30',
    },
  ]
  
  return (
 <div className="w-full min-h-screen px-4 py-12 md:py-20 relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMGgtLjV2NDB6IiBmaWxsPSJyZ2JhKDEzOSwgOTIsIDI0NiwgMC4wNSkiLz48L3N2Zz4=')] -z-10" />

      <div className="max-w-6xl mx-auto">
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
            <SatelliteIcon className="w-10 h-10 text-cyan-400" />
            Contact Me:
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            I welcome opportunities for communication and collaboration. If you’d like to connect, 
            discuss ideas, or explore potential projects, don’t hesitate to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form - Spans 3 cols */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="lg:col-span-3 glass-panel rounded-3xl p-8 md:p-10 border-violet-500/30 relative overflow-hidden"
          >

            {/* Status Card */}
            <div className="glass-panel rounded-3xl p-8 border-cyan-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px]" />

              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
                  Status: Online
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                Current Coordinates
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 text-slate-300">
                  <MapPinIcon className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-white">Sector 7G (Earth)</p>
                    <p className="text-sm text-slate-400">San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <MailIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                  <p className="font-medium">alex@example.com</p>
                </div>
              </div>
            </div>
          
          </motion.div>

          {/* Contact Info & Social Links - Spans 2 cols */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="lg:col-span-2 space-y-6"
          >

            {/* Social Network */}
            <div className="glass-panel rounded-3xl p-8 border-slate-700/50">
              <h3 className="text-sm font-mono text-slate-400 mb-6 uppercase tracking-widest">
                Network Nodes
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.3 + index * 0.1,
                      }}
                      className={`flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-700/50 ${social.bg} transition-all group`}
                    >
                      <Icon
                        className={`w-8 h-8 mb-3 ${social.color} transition-colors`}
                      />
                      <span className="text-xs font-medium text-slate-400 group-hover:text-white uppercase tracking-wider">
                        {social.label}
                      </span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;