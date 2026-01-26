import React from 'react';
import myResume from './resume.pdf'; 

const PROJECTS = [
  {
    title: "Sentinel Intelligence System",
    metric: "100% PRIVATE AI",
    desc: "Designed an autonomous monitoring engine using local Llama 3 models. Reclaimed 100GB of disk space.",
    tech: ["Python", "FastAPI", "Ollama", "Llama 3"]
  },
  {
    title: "JPMorgan: High-Frequency Engine",
    metric: "53% LATENCY CUT",
    desc: "Refactored 12+ microservices handling 10M daily transactions. Optimized Redis and PostgreSQL.",
    tech: ["Node.js", "Python", "Redis", "PostgreSQL"]
  },
  {
    title: "UHG: HIPAA Cloud Migration",
    metric: "25% COST SAVINGS",
    desc: "Migrated 6 critical services to AWS. Reduced record delivery time by 60% while ensuring HIPAA compliance.",
    tech: ["AWS", "FastAPI", "Docker", "RabbitMQ"]
  }
];

const SKILLS = [
  { category: "Languages", items: ["Python", "Node.js", "SQL", "JavaScript"] },
  { category: "Frameworks", items: ["FastAPI", "Flask", "Express.js", "React"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
  { category: "Databases", items: ["PostgreSQL", "Redis", "MongoDB", "DynamoDB"] }
];

const EXPERIENCE = [
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer",
    period: "2022 — Present",
    impact: "Handling 10M+ daily operations. Reduced API response times by over 50%."
  },
  {
    company: "UnitedHealth Group (UHG)",
    role: "Software Engineer",
    period: "2020 — 2022",
    impact: "Architected cloud-native migrations on AWS, achieving significant cost savings."
  }
];

function App() {
  return (
    <div className="min-h-screen p-6 md:p-20 max-w-6xl mx-auto bg-[#020617]">
      {/* HEADER SECTION */}
      <header className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl text-white font-medium tracking-tight">
            Sayali <span className="text-cyan-400 italic font-light">Gedam</span>
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mt-4">
            Software Engineer // 5+ Years Exp // MSCS
          </p>
        </div>
        
        {/* BUTTON GROUP */}
        <div className="flex flex-wrap gap-4">
          <a 
            href={myResume} 
            target="_blank" 
            rel="noreferrer" 
            download 
            className="bg-cyan-400 text-[#020617] px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg"
          >
            Download CV
          </a>
          <a 
            href="https://www.linkedin.com/in/sayaligedam/" 
            target="_blank" 
            rel="noreferrer" 
            className="border border-cyan-400/30 bg-cyan-400/5 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-cyan-400 hover:text-white transition-all"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:sayaligedam12@gmail.com?subject=Portfolio Inquiry" 
            className="border border-slate-700 bg-slate-900/50 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
          >
            Email Me
          </a>
        </div>
      </header>

      {/* PROJECTS SECTION */}
      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/50 mb-10">Projects</h2>
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

      {/* SKILLS SECTION */}
      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/50 mb-12">Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SKILLS.map((group, i) => (
            <div key={i}>
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">{group.category}</h3>
              <div className="flex flex-col gap-2">
                {group.items.map(skill => (
                  <span key={skill} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="mb-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/50 mb-12">Experience</h2>
        <div className="space-y-16">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-20">
              <div className="md:w-32 text-[10px] font-bold text-slate-500 uppercase tracking-widest pt-2">{exp.period}</div>
              <div className="flex-1 border-l border-slate-800 pl-8 relative">
                <div className="absolute -left-[3px] top-3 w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{exp.company}</h3>
                <p className="text-cyan-400/80 text-xs font-bold uppercase tracking-widest mt-1 mb-4">{exp.role}</p>
                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{exp.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="mt-40 pt-10 border-t border-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>Boston, MA</span>
        <div className="flex gap-8">
          <a href="https://github.com/Gedam12" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/sayaligedam/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href="mailto:sayaligedam12@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a>
        </div>
        <span>© 2026 Sayali Gedam</span>
      </footer>
    </div>
  );
}

export default App;