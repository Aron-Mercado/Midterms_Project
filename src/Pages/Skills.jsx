import React from 'react'
import { motion } from 'framer-motion'
import { 
    CpuIcon, 
    DatabaseIcon,
    RocketIcon, 
    MonitorCog,
} from 'lucide-react'
const skillsData = [
  {
    category: 'Frontend Systems',
    icon: CpuIcon,
    color: 'from-cyan-400 to-blue-600',
    skills: [
      {
        name: 'React / Next.js',
        level: 95,
        iconLower: MonitorCog,
      },
      {
        name: 'JavaScript (ES6+)',
        level: 92,
        iconLower: MonitorCog,
      },
      {
        name: 'Tailwind CSS',
        level: 90,
        iconLower: MonitorCog,
      },
      {
        name: 'Three.js / WebGL',
        level: 75,
        iconLower: MonitorCog,
      },
      {
        name: 'Framer Motion',
        level: 85,
        iconLower: MonitorCog,
      },
    ],
  },
  {
    category: 'Backend Core',
    icon: DatabaseIcon,
    color: 'from-fuchsia-400 to-purple-600',
    skills: [
      {
        name: 'Node.js / Express',
        level: 88,
        iconLower: MonitorCog,
      },
      {
        name: 'Python / FastAPI',
        level: 82,
        iconLower: MonitorCog,
      },
      {
        name: 'PostgreSQL',
        level: 85,
        iconLower: MonitorCog,
      },
      {
        name: 'MongoDB / NoSQL',
        level: 80,
        iconLower: MonitorCog,
      },
      {
        name: 'GraphQL / REST',
        level: 90,
        iconLower: MonitorCog,
      },
    ],
  },
  
]

function Skills() {

return (

    <div className="w-full min-h-screen px-4 py-12 md:py-20">
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
          className="text-center mb-16 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider">
            System Capabilities
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Current operational status of technical proficiencies and
            engineering subsystems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: categoryIndex * 0.1,
                }}
                className="glass-panel rounded-3xl p-8 border-slate-700/50 hover:border-violet-500/30 transition-colors relative overflow-hidden group"
              >
                {/* Background glow effect */}
                <div
                  className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${category.color} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                />

                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 backdrop-blur-sm border border-white/10`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const LowerIcon = skill.iconLower
                    return (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                      }}
                    >
                      {/* Skill Name and Level */}
                      <div className="flex justify-between items-end mb-2">
                        <LowerIcon className="w-5 h-5 text-violet-400 group-hover:text-fuchsia-400 transition-colors"/>
                        <span className="text-slate-300 font-medium tracking-wide">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 font-mono text-sm">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="w-full h-1.5 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50">
                        {/* Animated Progress Bar */}
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          animate={{
                            width: `${skill.level}%`,
                          }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                            ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          {/* Glowing tip */}
                          <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]" />
                        </motion.div>
                      </div>
                    </motion.div>
                    )})}
                </div>
              </motion.div>
                
            )
          })}
        </div>

        {/* Radar/Scanner Animation */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="mt-20 flex justify-center"
        >
          <div className="relative w-32 h-32 rounded-full border border-violet-500/20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-fuchsia-500/10 scale-150" />
            <div className="absolute inset-0 rounded-full border border-cyan-500/5 scale-200" />

            {/* Radar sweep */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 70%, rgba(139, 92, 246, 0.4) 100%)',
              }}
            />

            <div className="w-2 h-2 bg-fuchsia-400 rounded-full shadow-[0_0_10px_#d946ef]" />
            <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee] animate-pulse" />

            <div className="absolute -bottom-8 whitespace-nowrap text-xs font-mono text-slate-500 uppercase tracking-widest">
              Scanning for new tech...
            </div>
          </div>
        </motion.div>
      </div>
    </div>
)

}

export default Skills;