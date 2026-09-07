import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {
  ExternalLink,
  Layers,
  Database,
  Code2,
  Menu,
  X,
  FileText,
  ChevronRight,
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Isabella Namutenda",
      description: "An end-to-end residential enquiry and property management system featuring role-based authentication, relational schema architecture, and real-time listings.",
      tags: ["React", "Ruby on Rails", "MySQL", "Tailwind CSS"],
      liveUrl: "https://github.com/Isabellanamutenda",
      githubUrl: "https://github.com/Isabellanamutenda",
      category: "Full Stack"
    },
    {
      title: "Serene Habitat",
      description: "A modern housing web platform designed with responsive layouts, smooth navigation states, and clean component-driven architecture.",
      tags: ["Nuxt 3", "Vue.js", "Tailwind CSS", "REST API"],
      liveUrl: "https://github.com/Isabellanamutenda",
      githubUrl: "https://github.com/Isabellanamutenda",
      category: "Frontend & UI"
    },
    {
      title: "Safari Modern Portal",
      description: "Interactive travel and tour discovery web interface with dynamic itinerary views, responsive inquiry flows, and structured package management.",
      tags: ["React", "Tailwind CSS", "Headless CMS", "Node.js"],
      liveUrl: "https://github.com/Isabellanamutenda",
      githubUrl: "https://github.com/Isabellanamutenda",
      category: "Full Stack"
    }
  ];

  const skillGroups = [
    {
      category: "Frontend Engineering",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      skills: ["React", "Vue.js", "Nuxt.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & CSS3"]
    },
    {
      category: "Backend & Systems",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      skills: ["Ruby on Rails", "REST APIs", "MySQL", "PostgreSQL", "MVC Architecture"]
    },
    {
      category: "Tools & Methodologies",
      icon: <Code2 className="w-5 h-5 text-amber-400" />,
      skills: ["Git & GitHub", "Figma / UI Design", "Responsive Layouts", "Vite", "Agile"]
    }
  ];

  const experiences = [
    {
      role: "Software Engineering Intern / Trainee",
      company: "Ubuntu Waterhub Africa",
      period: "2026",
      summary: "Contributed to digital system planning, internal tenant portal design, hardware communication workflows, and client-side form validation."
    },
    {
      role: "Diploma in Software Engineering",
      company: "Zetech University",
      period: "2024 — Present",
      summary: "Focusing on data structures, object-oriented programming (OOP), relational database architecture, and full-stack software development."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors">
            Isabella<span className="text-indigo-500">.</span>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a
              href="resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              Download CV
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col space-y-3">
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Projects</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Experience</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Contact</a>
            <a href="resume.pdf" download className="text-indigo-400 font-semibold">Download CV</a>
          </div>
        )}
      </nav>

      <main className="pt-24 max-w-6xl mx-auto px-6 space-y-32">
        {/* Hero */}
        <section id="home" className="pt-16 pb-8 md:pt-24 flex flex-col items-start gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-indigo-950/70 text-indigo-300 border border-indigo-800/60 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for software engineering roles & attachment
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building reliable web systems and <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">thoughtful user interfaces</span>.
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed">
            I'm Isabella Namutenda, a Full-Stack Software Developer based in Nairobi, Kenya. I craft modern web applications using React, Vue/Nuxt, Tailwind CSS, and Ruby on Rails.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-medium text-white transition-all shadow-lg shadow-indigo-600/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-900 font-medium text-slate-300 hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center gap-5 pt-4 text-slate-400">
            <a href="https://github.com/Isabellanamutenda" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/isabella-namutenda/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:namtendaisabella@gmail.com" className="hover:text-white transition-colors">
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Capabilities</h2>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Technical Stack</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    {group.icon}
                  </div>
                  <h3 className="font-semibold text-slate-100">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Work</h2>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Featured Projects</p>
            </div>
            <a 
              href="https://github.com/Isabellanamutenda" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              GitHub Profile <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-950/60 border border-indigo-900/50">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-3 text-slate-400">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub Repository">
                        <FaGithub className="w-4 h-4" />
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Live Project">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono text-slate-400 bg-slate-800/70 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Journey</h2>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Experience & Background</p>
          </div>

          <div className="border-l border-slate-800 pl-6 space-y-8 ml-2">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative space-y-2">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-4 border-slate-950" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-100">{exp.role}</h3>
                  <span className="text-xs font-mono text-indigo-400">{exp.period}</span>
                </div>
                <div className="text-sm font-medium text-slate-400">{exp.company}</div>
                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{exp.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 pb-20 border-t border-slate-800/80 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2 max-w-md">
              <h2 className="text-2xl font-bold tracking-tight text-white">Let's build together.</h2>
              <p className="text-sm text-slate-400">
                Have an opportunity, an attachment opening, or want to discuss full-stack projects? Let's connect.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="mailto:namtendaisabella@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-md"
              >
                <FaEnvelope className="w-4 h-4" />
                namtendaisabella@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/isabella-namutenda/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-800 hover:bg-slate-900 text-slate-300 hover:text-white font-medium text-sm transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} Isabella Namutenda.</p>
            <p className="font-mono">React · Tailwind CSS</p>
          </div>
        </section>
      </main>
    </div>
  );
}