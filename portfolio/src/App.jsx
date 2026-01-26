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
  { 
    category: "AI & Intelligence", 
    items: ["Llama 3 / LLMs", "Ollama", "Prompt Engineering", "FastAPI AI agents"],
    icon: "🤖" 
  },
  { 
    category: "Cloud & DevOps", 
    items: ["AWS (S3, EC2, Lambda)", "Docker", "Kubernetes", "CI/CD Pipelines"],
    icon: "☁️"
  },
  { 
    category: "Backend & Scale", 
    items: ["Node.js", "Python (FastAPI/Flask)", "Microservices", "System Design"],
    icon: "⚙️"
  },
  { 
    category: "Data & Systems", 
    items: ["PostgreSQL", "Redis", "MongoDB", "RabbitMQ"],
    icon: "💾"
  }
];

const TIMELINE = [
  { 
    year: "2024", 
    type: "Work", 
    title: "Software Engineer", 
    place: "JPMorgan Chase & Co.", 
    desc: "Scaling high-frequency transaction systems for 10M+ daily operations." 
  },
  { 
    year: "2023", 
    type: "Study", 
    title: "MS in Computer Science", 
    place: "New England College", 
    desc: "Graduated Dec 2023 | Specializing in AI & Cloud | GPA 3.8" 
  },
  { 
    year: "2023", 
    type: "Work", 
    title: "Software Engineer", 
    place: "UnitedHealth Group (UHG)", 
    desc: "Architected cloud-native migrations on AWS, achieving 25% cost savings." 
  },
  { 
    year: "2022", 
    type: "Work", 
    title: "Software Engineer", 
    place: "JPMorgan Chase & Co.", 
    desc: "Joined the engineering team to focus on microservices and API optimization." 
  },
  { 
    year: "2021", 
    type: "Work", 
    title: "Software Developer Assoc.", 
    place: "R-Financial", 
    desc: "Built internal risk reporting tools using Flask and PostgreSQL." 
  },
  { 
    year: "2018", 
    type: "Work", 
    title: "Software Developer Assoc.", 
    place: "R-Financial", 
    desc: "Started career focusing on automation and data spreadsheet workflows." 
  }
];

function App() {
  return (
    <div className="min-h-screen p-6 md:p-20 max-w-6xl mx-auto bg-[#020617]">
      {/* HEADER */}
      <header className="mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl text-white font-medium tracking-tight">
            Sayali <span className="text-cyan-400 italic font-light">Gedam</span>
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mt-4">
            Software Engineer // MSCS // 5+ Years Experience
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a href={myResume} target="_blank" rel="noreferrer" download className="bg-cyan-400 text-[#020617] px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg">Download CV</a>
          <a href="https://www.linkedin.com/in/sayaligedam/" target="_blank" rel="noreferrer" className="border border-cyan-400/30 bg-cyan-400/5 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-cyan-400 hover:text-white transition-all">LinkedIn</a>
          <a href="mailto:sayaligedam12@gmail.com?subject=Portfolio Inquiry" className="border border-slate-700 bg-slate-900/50 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-all">Email Me</a>
        </div>
      </header>

      {/* PROJECTS SECTION */}
      <section className="mb-40">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/50 mb-10">Featured Work</h2>
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

      {/* RESTORED SKILLS SECTION */}
      {/* UPDATED SKILLS SECTION */}
<section className="mb-40">
  <div className="flex items-center gap-4 mb-12">
    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/50">Technical Stack</h2>
    <div className="h-[1px] flex-grow bg-slate-800"></div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {SKILLS.map((group, i) => (
      <div key={i} className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/10 hover:bg-cyan-400/[0.02] hover:border-cyan-400/30 transition-all duration-500">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xl">{group.icon}</span>
          <h3 className="text-xs font-bold text-white uppercase tracking-widest">{group.category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {group.items.map(skill => (
            <span key={skill} className="text-[10px] font-bold text-slate-500 border border-slate-800 px-2 py-1 rounded-md group-hover:text-cyan-400 group-hover:border-cyan-400/20 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* ALTERNATING TIMELINE SECTION */}
      <section className="mb-40">
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500/50 mb-20 text-center">Journey</h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-slate-800"></div>
          <div className="space-y-12">
            {TIMELINE.map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4 md:px-10">
                  <div className={`p-6 rounded-xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm w-full max-w-md ${i % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                    <span className="text-[10px] font-black text-cyan-400 tracking-widest uppercase">{item.year} — {item.type}</span>
                    <h3 className="text-xl font-bold text-white mt-1 leading-tight">{item.title}</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase mt-1 mb-3">{item.place}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full border-4 border-[#020617] z-10 ${item.type === 'Work' ? 'bg-cyan-400' : 'bg-white'}`}></div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-40 pt-10 border-t border-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>Boston, MA</span>
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