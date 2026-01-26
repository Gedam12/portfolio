import React from 'react';
// 1. Import the PDF file directly
import myResume from './resume.pdf'; 

const PROJECTS = [
  {
    title: "Sentinel Intelligence System",
    metric: "100% PRIVATE AI",
    desc: "Designed an autonomous monitoring engine using local Llama 3 models to analyze system logs and web changes. Achieved 100% data residency and reclaimed 100GB of disk space.",
    tech: ["Python", "FastAPI", "Ollama", "Llama 3", "PowerShell"]
  },
  {
    title: "JPMorgan: High-Frequency Engine",
    metric: "53% LATENCY CUT",
    desc: "Refactored 12+ microservices handling 10M daily transactions. Optimized Redis and PostgreSQL to reduce median API response time from 150ms to under 70ms.",
    tech: ["Node.js", "Python", "Redis", "PostgreSQL", "Prometheus"]
  },
  {
    title: "UHG: HIPAA Cloud Migration",
    metric: "25% COST SAVINGS",
    desc: "Migrated 6 critical services to AWS Lambda and ECS. Reduced record delivery time by 60% while ensuring 100% HIPAA compliance.",
    tech: ["AWS", "FastAPI", "Docker", "RabbitMQ", "Celery"]
  }
];

const SKILLS = [
  { category: "Languages", items: ["Python", "Node.js", "SQL", "JavaScript", "Bash"] },
  { category: "Frameworks", items: ["FastAPI", "Flask", "Express.js", "Django", "React"] },
  { category: "Cloud & DevOps", items: ["AWS (Lambda, ECS, S3)", "Docker", "Kubernetes", "CI/CD", "Git"] },
  { category: "Databases", items: ["PostgreSQL", "Redis", "MongoDB", "DynamoDB"] }
];

const EXPERIENCE = [
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer",
    period: "2022 — Present",
    impact: "Handling 10M+ daily operations. Tuned high-performance databases to drop API response times by over 50%."
  },
  {
    company: "UnitedHealth Group (UHG)",
    role: "Software Engineer",
    period: "2020 — 2022",
    impact: "Architected cloud-native migrations on AWS, achieving significant infrastructure cost savings and performance gains."
  }
];

const EDUCATION = [
  {
    school: "New England College",
    degree: "Master of Science in Computer Science",
    location: "USA",
    period: "Graduated"
  }
];

function App() {
  const emailLink = "mailto:sayaligedam12@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Sayali,";

  return (
    <div className="min-h-screen p-6 md:p-20 max-w-6xl mx-auto bg-[#020617]">
      
      {/* Header with Fixed Download/Contact */}
      <header className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl text-white font-medium tracking-tight">
            Sayali <span className="text-cyan-400 italic font-light">Gedam</span>
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mt-4">
            Software Engineer // 5+ Years Exp // MSCS
          </p>
        </div>
        
        <div className="flex gap-4">
          {/* 2. Use the imported variable 'myResume' here */}
          <a 
            href={myResume} 
            target="_blank" 
            rel="noopener noreferrer"
            download="Sayali_Gedam_Resume.pdf"
            className="bg-cyan-400 text-[#020617] px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-cyan-500/20"
          >
            Download CV
          </a>
          <a 
            href={emailLink} 
            className="border border-cyan-400/30 bg-cyan-400/5 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-cyan-400 hover:text-white hover:border-cyan-400 transition-all"
          >
            Contact Me
          </a>
        </div>
      </header>

      {/* Projects */}
      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/50 mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {PROJECTS.map((p, i) => (
            <div key={i} className="group border-t border-slate-800 pt-6 hover:border-cyan-400/50 transition-colors">
              <span className="text-[9px] font-bold text-cyan-400 tracking-widest uppercase">{p.metric}</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-[9px] font-medium text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 uppercase italic">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/50 mb-12">Technical Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SKILLS.map((group, i) => (
            <div key={i}>
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">{group.category}</h3>
              <div className="flex flex-col gap-2">
                {group.items.map(skill => (
                  <span key={skill} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* History & Education */}
      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/50 mb-12">History & Education</h2>
        <div className="space-y-16">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-20">
              <div className="md:w-32 text-[10px] font-bold text-slate-500 uppercase tracking-widest pt-2">{exp.period}</div>
              <div className="flex-1 border-l border-slate-800 pl-8 relative">
                <div className="absolute -left-[3px] top-3 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{exp.company}</h3>
                <p className="text-cyan-400/80 text-xs font-bold uppercase tracking-widest mt-1 mb-4">{exp.role}</p>
                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{exp.impact}</p>
              </div>
            </div>
          ))}
          {EDUCATION.map((edu, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-20 opacity-80">
              <div className="md:w-32 text-[10px] font-bold text-slate-500 uppercase tracking-widest pt-2">{edu.period}</div>
              <div className="flex-1 border-l border-slate-800 pl-8 relative">
                <div className="absolute -left-[3px] top-3 w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                <h3 className="text-xl font-bold text-white tracking-tight">{edu.school}</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-40 pt-10 border-t border-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 flex justify-between">
        <span>Boston, MA // MSCS</span>
        <span>© 2026 Sayali Gedam</span>
      </footer>
    </div>
  );
}

export default App;