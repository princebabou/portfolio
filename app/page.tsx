"use client";

import { useState, useEffect, useRef } from "react";
import { Map, Mail, Phone, Github, Linkedin, X, Menu } from "lucide-react";
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaPython } from "react-icons/fa";
import "./page.css";
import { SiTypescript } from "react-icons/si";
import emailjs from 'emailjs-com';

// Navbar component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 bg-opacity-95 p-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
          <span className="text-white font-bold text-xl">B</span>
        </div>
        <button
          className="lg:hidden text-gray-300 hover:text-white transition-colors focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row absolute lg:static top-full left-0 right-0 bg-gray-900 lg:bg-transparent space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0 rounded-b-lg lg:rounded-none shadow-2xl lg:shadow-none transition-all duration-300 ease-in-out`}
        >
          {[
            "Home",
            "About",
            "Services",
            "Projects",
            "Experience",
            "Contact",
          ].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-500 transition-colors block lg:inline-block text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
// Hero section 
const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [
    "Web Development",
    "Cyber Security",
    "Mobile Development",
    "AI",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4">
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <div className="mb-4">
            <span className="text-white lg:text-xl bg-blue-500 px-4 py-2 rounded-full inline-block">
              👋 Hello
            </span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-bold mb-4">
            I&apos;m Babou
          </h1>
          <div className="text-blue-500 text-2xl lg:text-4xl mb-4 h-16">
            I am into {typedText}
            <span className="animate-blink">|</span>
          </div>
          <p className="text-gray-400 mb-6 text-lg lg:text-xl">
            Full Stack Web Developer | Mobile Developer | Cybersecurity
            Enthusiast
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
            About Me →
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
            <img
              src="/images/prof.jpg"
              alt="Babou"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-2xl"
            />
            <FaReact
              className="absolute text-blue-400 w-8 h-8 lg:w-12 lg:h-12 animate-spin-slow"
              style={{ top: "-10%", left: "50%" }}
            />
            <FaJs
              className="absolute text-yellow-400 w-8 h-8 lg:w-12 lg:h-12 "
              style={{ top: "20%", left: "-10%" }}
            />
            <SiTypescript
              className="absolute text-blue-600 w-8 h-8 lg:w-12 lg:h-12"
              style={{ bottom: "15%", left: "20%" }}
            />
            <FaPython
              className="absolute text-yellow-600 w-8 h-8 lg:w-12 lg:h-12 animate-spin-reverse"
              style={{ bottom: "10%", right: "15%" }}
            />
            <FaNodeJs
              className="absolute text-green-500 w-8 h-8 lg:w-12 lg:h-12 animate-bounce-slow"
              style={{ top: "5%", right: "0%" }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

// About section
const About = () => (
  <section id="about" className="bg-gray-900 py-20">
    <div className="container mx-auto">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="relative w-72 h-72 mx-auto">
            <img
              src="/images/profile.png"
              alt="Babou"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 md:pl-12">
          <h3 className="text-white text-2xl font-semibold mb-4">
            Manzi Prince Babou
          </h3>
          <p className="text-blue-500 mb-2">Full Stack Developer</p>
          <p className="text-gray-300 text-lg mb-4">
            I&apos;m a full-stack web developer with a passion for building
            beautiful, functional, and scalable web applications. I&apos;m currently
            a student at Rwanda Coding Academy learning software development &
            Embedded Systems. I&apos;m also a programmer with a keen
            interest in learning new technologies and frameworks. I&apos;m familiar
            with different languages & frameworks and I&apos;m looking forward to
            learning more about them and other technologies.
          </p>
          <div className="flex items-center">
            <a
              href="#resume"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mr-4"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

type TabType = "frontend" | "backend" | "databases" | "others" | "mobile";

// Skills section 
const Skills = () => {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");

  const skills: Record<
    TabType,
    { name: string; level: number; icon: string }[]
  > = {
    frontend: [
      { name: "NextJS", level: 90, icon: "/images/next.png" },
      { name: "Bootstrap", level: 95, icon: "/images/boot.jpg" },
      { name: "JavaScript", level: 85, icon: "/images/JS.png" },
      { name: "Angular", level: 80, icon: "/images/angular.png" },
      { name: "Vue", level: 80, icon: "/images/vue.png" },
      { name: "React", level: 90, icon: "/images/react.png" },
      { name: "TypeScript", level: 85, icon: "/images/type.png" },
      { name: "UI/UX Design", level: 80, icon: "/images/uix.png" },
    ],
    backend: [
      { name: "Node.js", level: 90, icon: "/images/node.png" },
      { name: "Python", level: 90, icon: "/images/py.jpg" },
      { name: "PHP", level: 90, icon: "/images/php.png" },
      { name: "Spring Boot", level: 75, icon: "/images/spring.jpg" },
      { name: "Docker", level: 78, icon: "/images/docker.png" },
    ],
    databases: [
      { name: "SQL", level: 85, icon: "/images/sql.png" },
      { name: "PostgreSQL", level: 80, icon: "/images/postgres.png" },
      { name: "MongoDB", level: 90, icon: "/images/mongo.png" },
    ],
    others: [
      { name: "Firebase", level: 85, icon: "/images/firebase.png" },
      { name: "C++", level: 85, icon: "/images/C++.png" },
      { name: "Cybersecurity", level: 90, icon: "/images/cyber.png" },
      { name: "Networking", level: 85, icon: "/images/network.png" },
    ],
    mobile: [
      { name: "React Native", level: 80, icon: "/images/native.png" },
      { name: "Flutter", level: 70, icon: "/images/flutter.png" },
    ],
  };

  return (
    <section id="skills" className="bg-gray-900 py-20 ">
      <div className="container mx-auto ">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Tech Stack
        </h2>
        <div className="flex justify-center mb-8 ">
          <button
            className={`tab-button ${activeTab === "frontend" ? "active" : ""}`}
            onClick={() => setActiveTab("frontend")}
          >
            Frontend
          </button>
          <button
            className={`tab-button ${activeTab === "backend" ? "active" : ""}`}
            onClick={() => setActiveTab("backend")}
          >
            Backend
          </button>
          <button
            className={`tab-button ${
              activeTab === "databases" ? "active" : ""
            }`}
            onClick={() => setActiveTab("databases")}
          >
            Databases
          </button>
          <button
            className={`tab-button ${activeTab === "mobile" ? "active" : ""}`}
            onClick={() => setActiveTab("mobile")}
          >
            Mobile
          </button>
          <button
            className={`tab-button ${activeTab === "others" ? "active" : ""}`}
            onClick={() => setActiveTab("others")}
          >
            Others
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills[activeTab].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-2">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 mr-3"
                />
                <h3 className="text-white text-xl">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full animate-fillBar"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-white font-bold">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Hardworking and goal-oriented",
      description:
        "I am hardworking, committed and I like setting goals and tasks to be done so as to simplify work.",
      icon: "bi bi-briefcase",
    },
    {
      title: "Backend Development",
      description:
        "Proficient in building scalable and efficient backend services using Node.js, Python, and PHP. Experience with Spring Boot and Docker for containerization.",
      icon: "bi bi-terminal",
    },
    {
      title: "Frontend Development",
      description:
        "Expert in creating responsive and visually appealing frontend designs using Next.js, React, Angular, and Vue. Strong understanding of UI/UX design principles.",
      icon: "bi bi-code-slash",
    },
    {
      title: "Cybersecurity",
      description:
        "Strong background in cybersecurity, focusing on protecting applications and systems from vulnerabilities. Experienced with various security tools and practices.",
      icon: "bi bi-qr-code-scan",
    },
    {
      title: "Mobile Development",
      description:
        "Skilled in developing mobile applications using Flutter and React Native. Focused on delivering smooth and user-friendly mobile experiences.",
      icon: "bi bi-phone",
    },
    {
      title: "AI & ML",
      description:
        "Hands-on experience in AI and ML, working with Python, IoT, and Raspberry Pi. Developed and deployed machine learning models for various applications.",
      icon: "bi bi-robot",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Services
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Since I entered this field, I&apos;ve honed my skills in problem-solving
          and adapting to various tech stacks. Here are the key services I
          offer
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-gray-200 p-6 rounded-lg shadow-lg text-center bg-gray-800 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="flex text-4xl justify-center mb-4 bg-blue-500 rounded-full animate-fadeInSlide p-3 hover:bg-transparent hover:text-blue-500 border-2 border-blue-500">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-gray-300 text-xl font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CVRoadmap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roadmapRef = useRef(null);
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (roadmapRef.current) {
      observer.observe(roadmapRef.current);
    }

    return () => {
      if (roadmapRef.current) {
        observer.unobserve(roadmapRef.current);
      }
    };
  }, []);

  const experiences = {
    work: [
      { year: "2020", title: "Junior Developer", company: "Tech Startup Inc." },
      {
        year: "2021",
        title: "Full Stack Developer",
        company: "Web Solutions Co.",
      },
      {
        year: "2022",
        title: "Senior Developer",
        company: "Innovative Systems LLC",
      },
      {
        year: "2023",
        title: "Lead Developer",
        company: "Future Tech Enterprises",
      },
      { year: "2024", title: "Designer", company: "NextGen Solutions" },
    ],
    education: [
      {
        year: "2014",
        title: "Primary Education",
        institution: "  Kigali Harvest School",
      },
      { year: "2019", title: "O' level Education", institution: "GSO Butare" },
      {
        year: "2019",
        title: "A' Level Education",
        institution: "Rwanda Coding Academy",
      },
    ],
  };

  const roadmapItems =
    activeTab === "work" ? experiences.work : experiences.education;

  return (
    <section id="cv" className="bg-gray-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-white text-3xl font-bold mb-12 text-center">
          My Journey
        </h2>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 text-lg rounded-l-full ${
              activeTab === "work"
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => setActiveTab("work")}
          >
            Experience
          </button>
          <button
            className={`px-4 py-2 text-lg rounded-r-full ${
              activeTab === "education"
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>
        <div className="relative" ref={roadmapRef}>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-300"></div>
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : ""}`}>
                <div
                  className={`bg-gray-800 p-4 rounded-lg shadow-2xl ${
                    isVisible ? "animate-fadeInSlide" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-400">
                    {"company" in item ? item.company : item.institution}
                  </p>
                </div>
              </div>
              <div className="w-2/12 flex justify-center">
                <div
                  className={`w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-800 ${
                    isVisible ? "animate-scaleIn" : "scale-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                ></div>
              </div>
              <div className="w-5/12 text-center">
                <div
                  className={`text-white text-2xl font-bold ${
                    isVisible ? "animate-fadeInSlide" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {item.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects section 
const Projects = () => {
  const projects = [
    {
      name: "Plantiify",
      description: "Identify Plants using AI",
      link: "https://plantiify.vercel.app/",
      image: "/images/plantify.png",
    },
    {
      name: "Wishcraft",
      description: "One click to wish your beloved happy birthdays",
      link: "#",
      image: "/images/wishcraft.png",
    },
    {
      name: "Steganography tool",
      description: "Seamlessly hide messages in images",
      link: "https://github.com/princebabou/steganography-tool",
      image: "/images/steg.jpg",
    },
    {
      name: "Nutflix",
      description: "Keep track of trending movies and TV series",
      link: "https://nutflixx.vercel.app/",
      image: "/images/nutflix.png",
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:rotate-3 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white text-xl mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials section with animation
const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "Babou is an exceptional developer. Their work exceeded our expectations!",
      role: "CEO, Tech Corp",
      image: "/images/one.jpg", 
    },
    {
      name: "Jane Smith",
      text: "Working with Babou was a pleasure. They delivered high-quality work on time.",
      role: "Project Manager, Design Studio",
      image: "/images/two.jpg", 
    },
    {
      name: "Alex Johnson",
      text: "Babou's attention to detail and problem-solving skills are unmatched.",
      role: "CTO, Startup Inc.",
      image: "/images/three.jpg",
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-3xl font-bold mb-8">Testimonials</h2>
        <p className="text-gray-400 mb-12">
          Below are the testimonials that I got from different clients that I&apos;ve
          worked with.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-2xl relative"
            >
              <div className="text-blue-500 text-4xl mb-4">
                <i className="bi bi-quote"></i>
              </div>
              <p className="text-gray-200 mb-6 italic">{testimonial.text}</p>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="mt-16 font-bold text-lg">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact section with map
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    emailjs.send(
      'service_72p0uwq', 
      'template_7315bje', 
      templateParams,
      'cXcKdm2srY9_qxGvs'    
    )
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      setIsMessageSent(true); 
      setTimeout(() => setIsMessageSent(false), 3000);
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
    });
  };

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-white text-3xl font-bold mb-4 text-center">
          Contact
        </h2>
        <p className="text-gray-400 mb-12 text-center">
          You can reach me through my different social medias, call me, or email
          me directly at{" "}
          <a href="mailto:baboumanzi69@gmail.com" className="text-blue-400">
            baboumanzi69@gmail.com
          </a>
          .
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <i className="bi bi-geo-alt text-blue-500 text-xl mr-3"></i>
                <h3 className="text-lg font-semibold">Location:</h3>
              </div>
              <p className="text-gray-500">KG 17 Ave, Kigali, Rwanda</p>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <i className="bi bi-envelope text-blue-500 text-xl mr-3"></i>
                <h3 className="text-lg font-semibold">Email:</h3>
              </div>
              <p className="text-gray-500">baboumanzi69@gmail.com</p>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <i className="bi bi-phone text-blue-500 text-xl mr-3"></i>
                <h3 className="text-lg font-semibold">Call:</h3>
              </div>
              <p className="text-gray-500">+250 796 103 589</p>
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7396.7264409682575!2d30.189228675944673!3d-1.9676040933093157!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srw!4v1725372238118!5m2!1sen!2srw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-1/2 p-2 bg-gray-700 text-gray-900 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-1/2 p-2 bg-gray-700 text-gray-900 rounded"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2 bg-gray-700 text-gray-900 rounded"
                required
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 bg-gray-700 text-gray-900 rounded"
                rows={14}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// const AnimatedBackground = () => {
//   return (
//     <div className="animated-background absolute inset-0">
//       <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
//         <defs>
//           <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
//             <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
//           </linearGradient>
//         </defs>

//         {/* Animated lines */}
//         <g className="lines">
//           {[...Array(5)].map((_, i) => (
//             <path
//               key={`line-${i}`}
//               d={`M-${300 + i * 200},0 Q${150 + i * 100},${400 + i * 50} ${
//                 1000 + i * 200
//               },600`}
//               stroke="url(#grad1)"
//               strokeWidth="3"
//               fill="none"
//             />
//           ))}
//         </g>

//         {/* Circling elements */}
//         <g className="circles">
//           {[...Array(8)].map((_, i) => (
//             <circle
//               key={`circle-${i}`}
//               cx={100 + i * 200}
//               cy={100 + (i % 2) * 400}
//               r="20"
//               fill="url(#grad1)"
//             />
//           ))}
//         </g>

//         {/* Floating particles */}
//         <g className="particles">
//           {[...Array(20)].map((_, i) => (
//             <circle
//               key={`particle-${i}`}
//               cx={`${Math.random() * 100}%`}
//               cy={`${Math.random() * 100}%`}
//               r="1"
//               fill="#3B82F6"
//               opacity="0.7"
//             />
//           ))}
//         </g>
//       </svg>
//     </div>
//   );
// };

// Footer component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <p>&copy; 2024 Babou. All rights reserved.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a
          href="https://github.com/princebabou"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/manzi-babou-1b661b294/"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:baboumanzi69@gmail.com"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Mail size={24} />
        </a>
        <a
          href="tel:+250796103589"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  </footer>
);

export default function Home() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add("animate-fadeInUp");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();

    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <CVRoadmap />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
