import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Coffee, Lightbulb, Rocket, Rss, Share2, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

interface BlogProps {
  isDarkMode: boolean;
}

interface BlogCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
  isDarkMode: boolean;
}

const MotionLink = motion(Link);

const BlogCard = ({ icon: Icon, title, description, color, isDarkMode }: BlogCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 1 }}
    whileTap={{ scale: 0.95 }}
    className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl`}
  >
    <h3 className={`text-2xl font-semibold mb-4 flex items-center ${color}`}>
      <Icon className="mr-2" /> {title}
    </h3>
    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
      {description}
    </p>
  </motion.div>
);

export default function Blog({ isDarkMode }: BlogProps) {
  const backgroundGradient = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
    : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50';

  return (
    <section id="blog" className={`py-20 ${backgroundGradient} animate-on-scroll`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full max-w-6xl mx-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl overflow-hidden`}
        >
          <div className="p-12">
            <motion.h2 
              className={`text-5xl font-bold text-center flex items-center justify-center ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-8`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Book className="mr-4 text-blue-500" size={48} />
              Dive into My Digital Odyssey
            </motion.h2>
            <motion.p 
              className={`text-center text-xl mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-12`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Embark on a captivating journey through the realms of code, creativity, and cutting-edge technology. 
              Uncover insights, experiences, and a sprinkle of digital magic from my adventures as a programmer and lifelong learner.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <BlogCard
                icon={Code}
                title="Tech Expeditions"
                description="Venture into the unknown territories of emerging technologies, conquer coding challenges, and unravel the mysteries of complex algorithms."
                color={isDarkMode ? 'text-blue-300' : 'text-blue-600'}
                isDarkMode={isDarkMode}
              />
              <BlogCard
                icon={Coffee}
                title="Developer's Diary"
                description="Peek behind the screens and experience the highs, lows, and everything in between in the life of a passionate coder and curious student."
                color={isDarkMode ? 'text-green-300' : 'text-green-600'}
                isDarkMode={isDarkMode}
              />
              <BlogCard
                icon={Lightbulb}
                title="Eureka Chronicles"
                description="Celebrate those electrifying moments of clarity, ingenious problem-solving techniques, and clever hacks that make our developer journey truly rewarding."
                color={isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}
                isDarkMode={isDarkMode}
              />
              <BlogCard
                icon={Rocket}
                title="Code & Play"
                description="Dive into a world where learning meets fun! Engage with interactive coding challenges, tech-themed games, and mind-bending puzzles."
                color={isDarkMode ? 'text-purple-300' : 'text-purple-600'}
                isDarkMode={isDarkMode}
              />
              <BlogCard
                icon={Share2}
                title="Community Connect"
                description="Join a vibrant community of tech enthusiasts. Share your experiences, learn from others, and be part of engaging discussions on all things tech."
                color={isDarkMode ? 'text-pink-300' : 'text-pink-600'}
                isDarkMode={isDarkMode}
              />
              <BlogCard
                icon={Rss}
                title="Tech Pulse"
                description="Stay in sync with the heartbeat of the tech world. Get curated news, insightful analyses, and forecasts on the future of technology."
                color={isDarkMode ? 'text-orange-300' : 'text-orange-600'}
                isDarkMode={isDarkMode}
              />
            </div>

            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                From novice coders to seasoned developers, from tech enthusiasts to digital dreamers - 
                my blog is a sanctuary for all who seek knowledge, inspiration, and a touch of digital wonder.
              </p>
            </motion.div>

            <div className="flex justify-center items-center space-x-6">
              <MotionLink
                href="https://skirr.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                } font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="mr-2" /> Explore My Blog
              </MotionLink>
              <motion.button
                className={`${
                  isDarkMode
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                } font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ThumbsUp className="mr-2" /> Subscribe Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}