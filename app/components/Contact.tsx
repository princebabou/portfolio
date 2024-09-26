'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, Phone, Send } from 'lucide-react'
import emailjs from 'emailjs-com'

interface ContactProps {
  isDarkMode: boolean
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const templateParams = {
      name,
      email,
      subject,
      message,
    }

    try {
      await emailjs.send(
        'service_72p0uwq', 
        'template_7315bje', 
        templateParams,
        'cXcKdm2srY9_qxGvs'
      )
      setIsMessageSent(true)
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
      setTimeout(() => setIsMessageSent(false), 5000)
    } catch (err) {
      console.error('Failed to send email:', err)
      setError("Failed to send message. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          className={`mb-12 text-center max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            className={`w-full lg:w-1/3 p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactInfo 
              icon={<MapPin />}
              title="Location"
              content="KG 17 Ave, Kigali, Rwanda"
              isDarkMode={isDarkMode}
            />
            <ContactInfo 
              icon={<Mail />}
              title="Email"
              content="baboumanzi69@gmail.com"
              isDarkMode={isDarkMode}
            />
            <ContactInfo 
              icon={<Phone />}
              title="Phone"
              content="+250 796 103 589"
              isDarkMode={isDarkMode}
            />
            <div className="mt-6 w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7396.7264409682575!2d30.189228675944673!3d-1.9676040933093157!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srw!4v1725372238118!5m2!1sen!2srw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          <motion.div 
            className={`w-full lg:w-2/3 p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  isDarkMode={isDarkMode}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  isDarkMode={isDarkMode}
                />
              </div>
              <Input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                isDarkMode={isDarkMode}
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full p-3 rounded-lg resize-none ${
                  isDarkMode 
                    ? 'bg-gray-700 text-white placeholder-gray-400' 
                    : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                rows={6}
                required
              ></textarea>
              <motion.button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 ${
                  isDarkMode 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-blue-500 hover:bg-blue-600'
                } transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
            <AnimatePresence>
              {isMessageSent && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 p-3 bg-green-500 text-white rounded-lg"
                >
                  Message sent successfully!
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 p-3 bg-red-500 text-white rounded-lg"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  isDarkMode: boolean;
}

function ContactInfo({ icon, title, content, isDarkMode }: ContactInfoProps) {
  return (
    <div className="flex items-start mb-6">
      <div className={`mr-4 p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        {icon}
      </div>
      <div>
        <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{content}</p>
      </div>
    </div>
  )
}

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required: boolean;
  isDarkMode: boolean;
}

function Input({ type, placeholder, value, onChange, required, isDarkMode }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full p-3 rounded-lg ${
        isDarkMode 
          ? 'bg-gray-700 text-white placeholder-gray-400' 
          : 'bg-gray-100 text-gray-900 placeholder-gray-500'
      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
    />
  )
}