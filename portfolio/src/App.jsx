import React from 'react';
import myResume from './resume.pdf'; 

const PROJECTS = [
  {
    title: "Sentinel Intelligence System",
    metric: "100% PRIVATE AI",
    desc: "Designed an autonomous monitoring engine using local Llama 3 models. Reclaimed 100GB of disk space.",
    tech: ["Python", "FastAPI", "Ollama", "Llama 3"],
    link: "https://github.com/Gedam12/Sentinel-Intelligence-System"
  },
  {
    title: "JPMorgan: High-Frequency Engine",
    metric: "53% LATENCY CUT",
    desc: "Refactored 12+ microservices handling 10M daily transactions. Optimized Redis and PostgreSQL.",
    tech: ["Node.js", "Python", "Redis", "PostgreSQL"],
    link: "https://github.com/Gedam12/jpm-engine-clone"
  },
  {
    title: "UHG: HIPAA Cloud Migration",
    metric: "25% COST SAVINGS",
    desc: "Migrated 6 critical services to AWS. Reduced record delivery time by 60% while ensuring HIPAA compliance.",
    tech: ["AWS", "FastAPI", "Docker", "RabbitMQ"],
    link: "https://github.com/Gedam12/portfolio" 
  }
];

const SKILLS = [
  { category: "AI & Intelligence", items: ["LLMs", "Llama 3", "Ollama", "Prompt Eng."], icon: "🤖" },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD"], icon: "☁️" },
  { category: "Backend & Scale", items: ["Node.js", "Python", "FastAPI", "Microservices"], icon: "⚙️" },
  { category: "Data Systems", items: ["PostgreSQL", "Redis", "MongoDB", "RabbitMQ"], icon: "💾" }
];

const TIMELINE = [
  { year: "2024", type: "Work", title: "Software Engineer", place: "JPMorgan Chase & Co.", desc: "Scaling high-frequency systems for 10M+ daily operations." },
  { year: "2023", type: "Study", title: "MS in Computer Science", place: "New England College", desc: "Graduated Dec 2023 | AI & Cloud | GPA 3.8" },
  { year: "2023", type: "Work", title: "Software Engineer", place: "UnitedHealth Group (UHG)", desc: "Architected cloud-native migrations on AWS." },
  { year: "2022", type: "Work", title: "Software Engineer", place: "JPMorgan Chase & Co.", desc: "API optimization and microservices refactoring." },
  { year: "2021", type: "Work", title: "Software Developer Assoc.", place: "R-Financial", desc: "Built Flask/Postgres risk reporting tools." },
  { year: "2018", type: "Work", title: "Software Developer Assoc.", place: "R-Financial", desc: "Automated spreadsheet workflows." }
];

function App() {
  return (
    <div className="min-h-screen p-6 md:p-20 max-w-6xl mx-auto bg-[#020617]">
      {/* HEADER */}
      <header className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter">
            Sayali <span className="text-cyan-400 italic font-light">Gedam</span>
          </h1>
          <p className="text-xs font-bold uppercase tracking-[0.5em] text-slate-500 mt-6">
            Software Engineer // MSCS // 5+ Years Experience
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={myResume} target="_blank" rel="noreferrer" download className="bg-cyan-400 text-[#020617] px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-cyan-400/10">Download CV</a>
          <a href="mailto:sayaligedam12@gmail.com" className="border border-slate-700 bg-slate-900/50 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">Contact</a>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="mb-48 max-w-4xl">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-500/50 mb-8 underline decoration-cyan-500/30 underline-offset-8">Summary</h2>
        <p className="text-2xl md:text-4xl text-slate-200 leading-[1.2] font-light tracking-tight">
          Software Engineer specializing in <span className="text-white font-semibold">high-scale backend systems</span> and cloud architecture. MSCS graduate from New England College focused on <span className="text-cyan-400 italic">AI integration</span> and distributed computing.
        </p>
      </section>

      {/* JOURNEY */}
      <section className="mb-48">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-500/50 mb-20 text-center">Professional Journey</h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-slate-800"></div>
          <div className="space-y-16">
            {TIMELINE.map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4 md:px-12">
                  <div className={`p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md w-full max-w-md ${i % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                    <span className="text-[10px] font-black text-cyan-400 tracking-[0.2em] uppercase">{item.year} — {item.type}</span>
                    <h3 className="text-2xl font-bold text-white mt-2 leading-tight">{item.title}</h3>
                    <p className="text-slate-400 text-sm font-bold uppercase mt-1 mb-4">{item.place}</p>
                    <p className="text-base text-slate-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full border-4 border-[#020617] z-10 ${item.type === 'Work' ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)]'}`}></div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-48">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-500/50 mb-16">Technical Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((group, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-slate-800 bg-slate-900/10 hover:border-cyan-400/40 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span key={skill} className="text-xs font-medium text-slate-400 border border-slate-800/50 px-3 py-1.5 rounded-lg group-hover:text-cyan-300 group-hover:border-cyan-400/20 transition-colors">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-48">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-500/50 mb-12">Selected Projects</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {PROJECTS.map((p, i) => (
            <div key={i} className="group flex flex-col justify-between border-t-2 border-slate-800 pt-10 hover:border-cyan-400/50 transition-colors duration-500">
              <div>
                <span className="text-[10px] font-bold text-cyan-400 tracking-[0.3em] uppercase">{p.metric}</span>
                <h3 className="text-3xl font-bold text-white mt-4 mb-4 tracking-tight">{p.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed mb-8 font-light">{p.desc}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold text-slate-500 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800 uppercase tracking-tighter italic">{t}</span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-cyan-400 transition-all">
                  Access Code <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW CONTACT SECTION */}
      <section className="mb-20 py-20 border-y border-slate-900 text-center">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-500/50 mb-8">Get In Touch</h2>
        <h3 className="text-3xl md:text-5xl text-white font-bold mb-10 tracking-tighter">Let's build something scalable.</h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="mailto:sayaligedam12@gmail.com" className="text-xl text-cyan-400 hover:text-white transition-colors underline decoration-slate-800 underline-offset-8">sayaligedam12@gmail.com</a>
          <span className="hidden md:block text-slate-800">/</span>
          <a href="https://www.linkedin.com/in/sayaligedam/" target="_blank" rel="noreferrer" className="text-xl text-slate-400 hover:text-white transition-colors underline decoration-slate-800 underline-offset-8">LinkedIn Profile</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>Based in Boston, MA</span>
        <div className="flex gap-8">
          <a href="https://github.com/Gedam12" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/sayaligedam/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
        </div>
        <span>© 2026 Sayali Gedam</span>
      </footer>
    </div>
  );
}

export default App;