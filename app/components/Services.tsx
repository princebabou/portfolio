'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Terminal, Code, Shield, Smartphone, Cpu } from 'lucide-react'

interface ServicesProps {
  isDarkMode: boolean
}

const services = [
  {
    title: "Hardworking and goal-oriented",
    description: "I am hardworking, committed and I like setting goals and tasks to be done so as to simplify work.",
    icon: Briefcase,
  },
  {
    title: "Backend Development",
    description: "Proficient in building scalable and efficient backend services using Node.js, Python, and PHP. Experience with Spring Boot and Docker for containerization.",
    icon: Terminal,
  },
  {
    title: "Frontend Development",
    description: "Expert in creating responsive and visually appealing frontend designs using Next.js, React, Angular, and Vue. Strong understanding of UI/UX design principles.",
    icon: Code,
  },
  {
    title: "Cybersecurity",
    description: "Strong background in cybersecurity, focusing on protecting applications and systems from vulnerabilities. Experienced with various security tools and practices.",
    icon: Shield,
  },
  {
    title: "Mobile Development",
    description: "Skilled in developing mobile applications using Flutter and React Native. Focused on delivering smooth and user-friendly mobile experiences.",
    icon: Smartphone,
  },
  {
    title: "AI & ML",
    description: "Hands-on experience in AI and ML, working with Python, IoT, and Raspberry Pi. Developed and deployed machine learning models for various applications.",
    icon: Cpu,
  },
]

export default function Services({ isDarkMode }: ServicesProps) {
  return (
    <section id="services" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>
        <motion.p 
          className={`text-center mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Since I entered this field, I&apos;ve honed my skills in problem-solving and adapting to various tech stacks. Here are the key services I offer:
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} isDarkMode={isDarkMode} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: React.ElementType
  }
  isDarkMode: boolean
  index: number
}

function ServiceCard({ service, isDarkMode, index }: ServiceCardProps) {
  const { title, description, icon: Icon } = service

  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg ${
        isDarkMode 
          ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' 
          : 'bg-white text-gray-800 hover:bg-gray-50'
      } transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full mr-4 ${
          isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
        }`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{description}</p>
    </motion.div>
  )
}