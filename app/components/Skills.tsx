'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Server, Database, Smartphone, Cpu } from 'lucide-react'
import Image from 'next/image'

interface SkillsProps {
  isDarkMode: boolean
}

type TabType = "frontend" | "backend" | "databases" | "mobile" | "others"

const tabIcons: Record<TabType, React.ElementType> = {
  frontend: Code,
  backend: Server,
  databases: Database,
  mobile: Smartphone,
  others: Cpu,
}

const skills: Record<TabType, { name: string; level: number; color: string; icon: string }[]> = {
  frontend: [
    { name: "NextJS", level: 90, color: "from-blue-500 to-teal-500", icon: "/images/next.png" },
    { name: "Bootstrap", level: 95, color: "from-purple-500 to-indigo-500", icon: "/images/boot.jpg" },
    { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500", icon: "/images/JS.png" },
    { name: "Angular", level: 80, color: "from-red-500 to-pink-500", icon: "/images/angular.png" },
    { name: "Vue", level: 80, color: "from-green-500 to-teal-500", icon: "/images/vue.png" },
    { name: "React", level: 90, color: "from-blue-400 to-indigo-500", icon: "/images/react.png" },
    { name: "TypeScript", level: 85, color: "from-blue-600 to-indigo-600", icon: "/images/type.png" },
    { name: "UI/UX Design", level: 80, color: "from-pink-500 to-purple-500", icon: "/images/uix.png" },
  ],
  backend: [
    { name: "Node.js", level: 90, color: "from-green-500 to-teal-500", icon: "/images/node.png" },
    { name: "Python", level: 90, color: "from-blue-500 to-indigo-500", icon: "/images/py.jpg" },
    { name: "PHP", level: 90, color: "from-indigo-500 to-purple-500", icon: "/images/php.png" },
    { name: "Spring Boot", level: 75, color: "from-green-400 to-teal-500", icon: "/images/spring.jpg" },
    { name: "Docker", level: 78, color: "from-blue-400 to-indigo-500", icon: "/images/docker.png" },
  ],
  databases: [
    { name: "SQL", level: 85, color: "from-orange-500 to-red-500", icon: "/images/sql.png" },
    { name: "PostgreSQL", level: 80, color: "from-blue-500 to-indigo-500", icon: "/images/postgres.png" },
    { name: "MongoDB", level: 90, color: "from-green-500 to-teal-500", icon: "/images/mongo.png" },
  ],
  mobile: [
    { name: "React Native", level: 80, color: "from-blue-500 to-indigo-500", icon: "/images/react.png" },
    { name: "Flutter", level: 70, color: "from-blue-400 to-teal-500", icon: "/images/flutter.png" },
  ],
  others: [
    { name: "Firebase", level: 85, color: "from-yellow-500 to-orange-500", icon: "/images/firebase.png" },
    { name: "C++", level: 85, color: "from-blue-600 to-indigo-600", icon: "/images/C++.png" },
    { name: "Cybersecurity", level: 90, color: "from-red-500 to-pink-500", icon: "/images/cyber.png" },
    { name: "Networking", level: 85, color: "from-green-500 to-teal-500", icon: "/images/network.png" },
  ],
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("frontend")

  return (
    <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>
        <div className="flex justify-center mb-12 space-x-2 overflow-x-auto pb-4">
          {Object.keys(skills).map((tab) => (
            <TabButton 
              key={tab} 
              tab={tab as TabType} 
              activeTab={activeTab} 
              setActiveTab={setActiveTab}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills[activeTab].map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                index={index}
                isDarkMode={isDarkMode}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

interface TabButtonProps {
  tab: TabType
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
  isDarkMode: boolean
}

function TabButton({ tab, activeTab, setActiveTab, isDarkMode }: TabButtonProps) {
  const Icon = tabIcons[tab]
  return (
    <motion.button
      className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
        activeTab === tab
          ? isDarkMode
            ? 'bg-blue-600 text-white'
            : 'bg-blue-500 text-white'
          : isDarkMode
          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          : 'bg-white text-gray-600 hover:bg-gray-100'
      } transition-colors duration-200`}
      onClick={() => setActiveTab(tab)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={18} />
      <span className="capitalize">{tab}</span>
    </motion.button>
  )
}

interface SkillCardProps {
  skill: { name: string; level: number; color: string; icon: string }
  index: number
  isDarkMode: boolean
}

function SkillCard({ skill, index, isDarkMode }: SkillCardProps) {
  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 mr-4 relative">
          <Image
            src={skill.icon}
            alt={`${skill.name} icon`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{skill.name}</h3>
      </div>
      <div className="relative pt-1">
        <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <motion.div
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${skill.color}`}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
        <div className="flex justify-between">
          <span className={`text-sm font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Proficiency
          </span>
          <span className={`text-sm font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            {skill.level}%
          </span>
        </div>
      </div>
    </motion.div>
  )
}