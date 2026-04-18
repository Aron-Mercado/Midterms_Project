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
    <div className="text-center mb-16 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64" />
      <h2 className="text-4xl md:text-6xl mb-6 flex items-center justify-center gap-4">
        <RocketIcon className="w-10 h-10" />
        Mission Logs
      </h2>
      <p className="text-lg max-w-2xl mx-auto">
        A catalog of successful deployments across various sectors of the
        digital universe.
      </p>
    </div>

    {/* Category Filters */}
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className="px-6 py-2.5 text-sm"
        >
          {category}
        </button>
      ))}
    </div>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <div className="relative overflow-hidden">

          {/* Project Image */}
          <div className="relative overflow-hidden aspect-[4/3]">
            <div className="absolute inset-0" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" />

            {/* Category overlay */}
            <div className="absolute bottom-4 left-4">
              <span className="text-xs px-2 py-1">
                {project.category}
              </span>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6 relative">
            <h3 className="text-2xl mb-3">
              {project.title}
            </h3>
            <p className="text-sm mb-6">
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