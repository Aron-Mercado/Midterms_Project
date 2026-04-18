import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Computer,
  ExternalLinkIcon,
  RocketIcon,
  StarIcon,
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Test 1',
    description:
      '---',
    image: 'https://picsum.photos/800/600?random=10',
    category: 'HTML + CSS',
  },
  {
    id: 2,
    title: 'Test 2',
    description:
      '---',
    image: 'https://picsum.photos/800/600?random=10',
    category: 'Bootstrap',
  },
 
]

const categories = ['HTML + CSS', 'Bootstrap', 'React']

function Projects() {
 const [selectedCategory, setSelectedCategory] = useState('All Systems')
    let filteredProjects;
    // If selectedCategory === 'All Systems, then use projects
    if (selectedCategory === 'All Systems') {
    filteredProjects = projects;
    } 
    // Else use the filtered version
    else {
    filteredProjects = projects.filter(
        // sets "selectedCategory" to the chosen category 
        (project) => project.category === selectedCategory
    );
}


    
return (

<div className="w-full min-h-screen px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/20 rounded-full blur-[80px] -z-10" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider flex items-center justify-center gap-4">
            <RocketIcon className="w-10 h-10 text-fuchsia-500" />
            Mission Logs
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            A catalog of successful deployments across various sectors of the
            digital universe.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium tracking-wide text-sm uppercase transition-all duration-300 border ${selectedCategory === category ? 'bg-violet-500/20 text-fuchsia-300 border-fuchsia-500/50 shadow-[0_0_15px_rgba(217,70,239,0.3)]' : 'glass-panel text-slate-400 border-slate-700 hover:border-violet-500/50 hover:text-violet-300'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                className="group relative rounded-2xl overflow-hidden glass-panel border-slate-700 hover:border-fuchsia-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)]"
              >

                {/* Project Image */}
                <div className="relative overflow-hidden aspect-4/3">
                  <div className="absolute inset-0 bg-violet-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale-30 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />

                  {/* Category overlay */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-slate-900/80 px-2 py-1 rounded border border-cyan-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative z-20 bg-slate-950/50">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors font-sans">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>


)
}

export default Projects