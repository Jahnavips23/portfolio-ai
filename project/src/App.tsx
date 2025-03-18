import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Section from './components/Section';
import LoadingScreen from './components/LoadingScreen';
import ChatBot from './components/ChatBot';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <Navbar />
      <ChatBot />

      <main className="bg-gray-950">
        <Section id="home">
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                John Doe
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-8">
              Full-Stack Developer | UI/UX Designer
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </Section>

        <Section id="about">
          <h2 className="heading">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 text-lg">
                Hi, I'm John! A passionate and detail-oriented full-stack developer with
                expertise in building modern web applications. I thrive on solving complex
                problems and creating innovative solutions that enhance user experience
                and drive business success.
              </p>
              <p className="text-gray-300 text-lg">
                With over 5 years of experience in web development, I've worked with
                various technologies and frameworks to deliver high-quality solutions
                for clients across different industries.
              </p>
            </div>
          </div>
        </Section>

        <Section id="skills">
          <h2 className="heading">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'Frontend',
                skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
              },
              {
                category: 'Backend',
                skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
              },
              {
                category: 'Tools',
                skills: ['Git', 'Docker', 'AWS', 'Figma'],
              },
              {
                category: 'Soft Skills',
                skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Agile'],
              },
            ].map((group) => (
              <div key={group.category} className="card">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-gray-300">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience">
          <h2 className="heading">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Senior Full-Stack Developer',
                company: 'Tech Corp',
                period: '2020 - Present',
                description: [
                  'Led development of enterprise-scale web applications',
                  'Managed team of 5 developers',
                  'Improved site performance by 40%',
                ],
              },
              {
                title: 'Frontend Developer',
                company: 'Digital Agency',
                period: '2018 - 2020',
                description: [
                  'Developed responsive web applications',
                  'Collaborated with design team',
                  'Implemented CI/CD pipelines',
                ],
              },
            ].map((job) => (
              <div key={job.title} className="card">
                <h3 className="text-xl font-semibold text-purple-400">{job.title}</h3>
                <p className="text-gray-400 mb-4">{job.company} | {job.period}</p>
                <ul className="list-disc list-inside space-y-2">
                  {job.description.map((item) => (
                    <li key={item} className="text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects">
          <h2 className="heading">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'Full-stack e-commerce solution with real-time inventory management',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
                tech: ['React', 'Node.js', 'MongoDB'],
              },
              {
                title: 'Task Management App',
                description: 'Collaborative task management tool with real-time updates',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
                tech: ['Vue.js', 'Express', 'PostgreSQL'],
              },
            ].map((project) => (
              <div key={project.title} className="card overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-purple-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications">
          <h2 className="heading">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'AWS Certified Solutions Architect',
                org: 'Amazon Web Services',
                date: 'Dec 2023',
              },
              {
                name: 'Professional Scrum Master I',
                org: 'Scrum.org',
                date: 'Aug 2023',
              },
            ].map((cert) => (
              <div key={cert.name} className="card">
                <h3 className="text-xl font-semibold text-purple-400">{cert.name}</h3>
                <p className="text-gray-400">{cert.org}</p>
                <p className="text-gray-500">{cert.date}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact">
          <h2 className="heading">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <a href="mailto:john@example.com" className="card flex items-center gap-4">
                <Mail className="text-purple-400" size={24} />
                <span className="text-gray-300">john@example.com</span>
              </a>
              <a href="#" className="card flex items-center gap-4">
                <MapPin className="text-purple-400" size={24} />
                <span className="text-gray-300">San Francisco, CA</span>
              </a>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-gray-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-gray-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-gray-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;