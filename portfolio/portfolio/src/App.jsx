import React, { useEffect, useRef, useState } from "react";
import techBg from "./assets/tech-bg.png";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
  FaBriefcase,
  FaGraduationCap,
  FaTerminal,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

import {
  SiJavascript,
  SiVite,
  SiTailwindcss,
  SiNetlify,
  SiPython,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

const buildStack = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-400" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "React", icon: FaReact, color: "text-cyan-300" },
  { name: "Vite", icon: SiVite, color: "text-violet-300" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-300" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
  { name: "Python", icon: SiPython, color: "text-blue-300" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-300" },
  { name: "Docker", icon: SiDocker, color: "text-sky-400" },
  { name: "GitHub", icon: FaGithub, color: "text-slate-200" },
  { name: "Netlify", icon: SiNetlify, color: "text-emerald-300" },
];

const samplePortfolio = {
  name: "Sayali Gedam",
  role: "Software Engineer • Backend • Cloud • AI",
  about:
    "Backend engineer focused on APIs, cloud systems, and practical AI-driven products that are reliable, performant, and production-ready.",
  email: "sayaligedam12@gmail.com",
  github: "https://github.com/Gedam12",
  linkedin: "https://www.linkedin.com/in/sayali-mukund-gedam/",
  stats: {
    years: 5,
    focus: "Backend",
    mindset: "Cloud",
    specialty: "AI",
  },
  skills: [
    "Python",
    "Node.js",
    "React",
    "FastAPI",
    "AWS",
    "Docker",
    "PostgreSQL",
    "Redis",
  ],
  timeline: [
    {
      side: "left",
      year: "Jul 2024 — Present",
      title: "Software Engineer",
      subtitle: "UnitedHealth Group",
      type: "work",
      points: [
        "Improved pipeline efficiency and cloud scalability.",
        "Automated CI/CD and improved production readiness.",
      ],
    },
    {
      side: "right",
      year: "Jul 2023 — Jun 2024",
      title: "Cloud Backend Engineer",
      subtitle: "Stripe",
      type: "work",
      points: [
        "Engineered backend services supporting millions of transactions/day", 
        "ensuring high reliability and strong consistency.",
      ],
    },
    {
      side: "left",
      year: "Sep 2021 — Dec 2023",
      title: "Master’s in Computer Science",
      subtitle: "New England College",
      type: "education",
      points: ["Focused on software engineering and backend systems."],
    },
  ],
  projects: [
    {
      title: "Sentinel Intelligence System",
      desc: "A privacy-first local AI monitoring and notification platform.",
    },
    {
      title: "Transaction Analytics Engine",
      desc: "A high-volume backend system optimized for latency and observability.",
    },
    {
      title: "Portfolio Builder",
      desc: "A student-friendly portfolio generator using one design template.",
    },
  ],
};

const timelineItems = [
  {
    side: "left",
    year: "Jul 2024 — Present",
    title: "Software Engineer",
    subtitle: "UnitedHealth Group",
    type: "work",
    points: [
      "Engineered 12+ transaction microservices handling nearly 10M operations daily.",
      "Reduced median API latency from 150ms to under 70ms with Redis caching and PostgreSQL tuning.",
      "Cut deployment time from 3 hours to under 30 minutes through CI/CD automation.",
      "Improved incident response with real-time Prometheus and Grafana dashboards.",
    ],
  },
  {
    side: "right",
    year: "Jul 2023 — Jun 2024",
    title: "Software Engineer",
    subtitle: "Stripe",
    type: "work",
    points: [
      "Improved claims pipeline efficiency by 60% using modular backend services.",
      "Reduced infrastructure cost by 25% while improving scalability through AWS migration.",
      "Lowered deployment failures by 70% with GitLab CI/CD automation.",
      "Achieved 90% test coverage through Pytest integration suites.",
    ],
  },
  {
    side: "left",
    year: "Sep 2021 — Dec 2023",
    title: "Master’s in Computer Science",
    subtitle: "New England College",
    type: "education",
    points: [
      "Focused on computer science fundamentals, backend systems, and practical software engineering.",
    ],
  },
  {
    side: "right",
    year: "Sep 2018 — Aug 2021",
    title: "Software Developer Associate",
    subtitle: "Atlassian",
    type: "work",
    points: [
      "Automated daily risk reporting and reduced generation time by 70%.",
      "Built REST APIs supporting portfolio tracking for 5,000+ clients.",
      "Reduced ETL runtime from 2 hours to 45 minutes using Python automation and Bash scripts.",
      "Improved deployment reliability with Docker and AWS EC2 rollout strategies.",
    ],
  },
  {
    side: "left",
    year: "Aug 2016 — May 2020",
    title: "Bachelor’s in Electronics Engineering",
    subtitle: "G H Raisoni College of Engineering",
    type: "education",
    points: [
      "Built a strong engineering foundation in systems thinking, analysis, and problem solving.",
    ],
  },
];

const projects = [
  {
    title: "Sentinel Intelligence System",
    desc: "A privacy-first local AI monitoring and notification platform built around practical automation workflows.",
    Link: "https://github.com/Gedam12/Sentinel-Intelligence-System",
  },
  {
    title: "Transaction Analytics Engine",
    desc: "High-volume backend system optimized for low latency, observability, and safe CI/CD releases.",
    Link: "https://github.com/Gedam12/jpm-engine-clone"
  },
  {
    title: "Risk Reporting & Portfolio API Automation",
    desc: "Automation-focused backend work for reporting, ETL improvements, and secure financial workflows.",
  },
];

const terminalLines = [
  { cmd: "whoami", out: "Sayali Gedam — Software Engineer" },
  { cmd: "focus", out: "Backend Engineering | Cloud Systems | AI-driven Products" },
  { cmd: "skills", out: "Python, Node.js, React, FastAPI, AWS, Docker, PostgreSQL, Redis, CI/CD" },
  { cmd: "experience", out: "UnitedHealth Group | Stripe | Atlassian" },
  { cmd: "education", out: "M.S. Computer Science | New England College" },
  { cmd: "projects", out: "Sentinel Intelligence System | Transaction Analytics Engine | Risk Reporting Automation" },
  { cmd: "contact", out: "sayaligedam12@gmail.com" },
  { cmd: "status", out: "Open to software engineering opportunities." },
];

export default function App() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    const handleKeyDown = (e) => {
      if (e.shiftKey && (e.key === "D" || e.key === "d")) {
        setShowEasterEgg(true);
        setShowTerminal(true);

        setTimeout(() => {
          setShowEasterEgg(false);
        }, 2500);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <div
          className="animated-bg absolute inset-[-6%] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${techBg})` }}
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-slate-950/72" />

      <div
        className="pointer-events-none fixed z-[5] hidden h-5 w-5 rounded-full border border-cyan-200/60 bg-cyan-300/20 shadow-[0_0_24px_rgba(103,232,249,0.6)] transition-transform duration-75 md:block"
        style={{
          transform: `translate(${cursor.x - 10}px, ${cursor.y - 10}px)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl animate-floatSlow" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl animate-floatMedium" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl animate-floatSlow" />
      </div>

      {showEasterEgg && (
        <div className="fixed right-6 top-24 z-[120] rounded-2xl border border-cyan-300/25 bg-slate-950/80 px-5 py-3 text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.18)] backdrop-blur-md animate-toastIn">
          Developer mode activated 🚀
        </div>
      )}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-wide text-white">
            Sayali Mukund Gedam
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#stack" className="transition hover:text-cyan-300">Built With</a>
            <a href="#timeline" className="transition hover:text-cyan-300">Timeline</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <span className="inline-flex animate-pulse rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
                Software Engineer • Backend • Cloud • AI
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
                Creating a portfolio that feels technical, polished, and intentional
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                My work is centered around scalable backend engineering, cloud systems, API design, and practical AI use cases. I like building software that is strong in production and clean in design.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-cyan-300 px-5 py-3 font-medium text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(34,211,238,0.28)]"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-200"
                >
                  Contact
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/30 bg-slate-950/50 px-5 py-3 font-medium text-cyan-200 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-slate-900/70"
                >
                  <FaDownload />
                  Download Resume
                </a>

                <button
                  onClick={() => setShowTerminal(true)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/30 bg-slate-950/50 px-5 py-3 font-medium text-cyan-200 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-slate-900/70"
                >
                  <FaTerminal />
                  Open Dev Mode
                </button>
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-300/15 bg-slate-950/35 p-6 backdrop-blur-md shadow-2xl shadow-cyan-950/20 animate-floatMedium">
              <div className="grid gap-4 sm:grid-cols-2">
                <StatCard number={5} suffix="+" label="Years Experience" />
                <StatCard text="Backend" label="Core Focus" />
                <StatCard text="Cloud" label="Production Mindset" />
                <StatCard text="AI" label="Growing Specialty" />
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-[28px] border border-white/10 bg-slate-950/35 p-6 backdrop-blur-md">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-cyan-200">
              Built with
            </p>

            <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
              {buildStack.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_10px_25px_rgba(34,211,238,0.10)]"
                  >
                    <Icon className={`mx-auto text-3xl ${item.color}`} />
                    <p className="mt-3 text-xs text-slate-200 md:text-sm">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="About Me"
            title="Software Engineer with 5+ years of experience"
          />
          <div className="max-w-3xl rounded-[28px] border border-white/10 bg-slate-950/35 p-8 backdrop-blur-md transition duration-300 hover:border-cyan-300/20">
            <p className="leading-8 text-slate-200">
              Designing and developing scalable backend systems using Python, Node.js, and 
Express, supporting high-availability and performance-driven applications. Proven expertise in building RESTful APIs, 
microservices architectures, and asynchronous workflows, enabling faster integrations and improved system responsiveness. 
Skilled in leveraging Docker, AWS cloud services, and CI/CD pipelines to streamline deployments and enhance operational 
reliability.
            </p>
          </div>
        </section>

        <section id="timeline" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="Experience"
            title="Experience & Education"
          />

          <div className="relative mt-12 hidden md:block">
            <AnimatedTimelineLine />
            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>

          <div className="space-y-6 md:hidden">
            {timelineItems.map((item, index) => (
              <RevealOnScroll key={index}>
                <div className="rounded-[24px] border border-white/10 bg-slate-950/35 p-6 backdrop-blur-md">
                  <div className="mb-3 flex items-center gap-3">
                    {item.type === "work" ? (
                      <FaBriefcase className="text-cyan-300" />
                    ) : (
                      <FaGraduationCap className="text-cyan-300" />
                    )}
                    <p className="text-sm text-cyan-200">{item.year}</p>
                  </div>

                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-slate-300">{item.subtitle}</p>

                  <ul className="mt-4 space-y-2 text-slate-200">
                    {item.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Projects"
            title="Professional & Personal"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[28px] border border-white/10 bg-slate-950/35 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_12px_28px_rgba(34,211,238,0.08)]"
              >
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-200">{project.desc}</p>
                <a
                  href={project.Link}
                  className="mt-6 inline-flex items-center text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
                >
                  View Code →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/35 p-8 backdrop-blur-md md:p-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Let’s build something meaningful.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-200">
              I’m open to software engineering opportunities across backend, cloud,
              platform, and AI-focused product work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:sayaligedam12@gmail.com"
                className="rounded-2xl bg-cyan-300 px-5 py-3 font-medium text-slate-950 transition duration-300 hover:-translate-y-1"
              >
                Email Me
              </a>
              <a
                href="https://github.com/Gedam12"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sayali-gedam/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-20 border-t border-white/10 bg-slate-950/55 px-6 py-6 text-center text-sm text-slate-200 backdrop-blur-md">
  © 2026 Sayali Gedam • Built with React, Vite, and Tailwind CSS
</footer>

      {showTerminal && (
        <TerminalModal onClose={() => setShowTerminal(false)} />
      )}
    </div>
  );
}

function CountUp({ end, duration = 1200, suffix = "" }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        let startTime = null;

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function StatCard({ number, suffix = "", text, label }) {
  return (
    <div className="rounded-3xl border border-cyan-300/10 bg-slate-950/40 p-5 backdrop-blur-sm transition duration-300 hover:border-cyan-300/20">
      <p className="text-2xl font-bold text-white">
        {typeof number === "number" ? <CountUp end={number} suffix={suffix} /> : text}
      </p>
      <p className="mt-1 text-sm text-slate-300">{label}</p>
    </div>
  );
}

function RevealOnScroll({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function AnimatedTimelineLine() {
  return (
    <>
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-cyan-300/20" />
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-300/0 via-cyan-300/60 to-cyan-300/0 animate-timelineGlow" />
    </>
  );
}

function TimelineItem({ side, year, title, subtitle, points, type }) {
  const isLeft = side === "left";

  return (
    <RevealOnScroll>
      <div className="relative flex items-center">
        {isLeft ? (
          <>
            <div className="w-1/2 pr-10">
              <TimelineCard
                year={year}
                title={title}
                subtitle={subtitle}
                points={points}
                type={type}
                align="right"
              />
            </div>
            <div className="absolute left-1/2 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.75)] animate-pulse" />
            <div className="w-1/2" />
          </>
        ) : (
          <>
            <div className="w-1/2" />
            <div className="absolute left-1/2 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.75)] animate-pulse" />
            <div className="w-1/2 pl-10">
              <TimelineCard
                year={year}
                title={title}
                subtitle={subtitle}
                points={points}
                type={type}
                align="left"
              />
            </div>
          </>
        )}
      </div>
    </RevealOnScroll>
  );
}

function TimelineCard({ year, title, subtitle, points, type, align }) {
  return (
    <div
      className={`rounded-[24px] border border-white/10 bg-slate-950/35 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <div className={`mb-3 flex items-center gap-3 ${align === "right" ? "justify-end" : "justify-start"}`}>
        {type === "work" ? (
          <FaBriefcase className="text-cyan-300" />
        ) : (
          <FaGraduationCap className="text-cyan-300" />
        )}
        <p className="text-sm text-cyan-200">{year}</p>
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-1 text-slate-300">{subtitle}</p>

      <ul className="mt-4 space-y-2 text-slate-200">
        {points.map((point, i) => (
          <li key={i}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}

function TerminalModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-2xl border border-cyan-300/20 bg-[#0a0f1c] shadow-2xl shadow-cyan-950/30">
        <div className="flex items-center justify-between border-b border-cyan-300/10 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 text-sm text-cyan-200">dev-mode.sh</span>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            <FaTimes />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-6 font-mono text-sm leading-7 text-slate-200">
          <p className="mb-4 text-cyan-300">$ initializing developer mode...</p>
          {terminalLines.map((line, index) => (
            <div key={index} className="mb-4">
              <p className="text-green-400">
                <span className="text-cyan-300">sayali@portfolio</span>:~$ {line.cmd}
              </p>
              <p className="whitespace-pre-wrap text-slate-200">{line.out}</p>
            </div>
          ))}
          <p className="text-green-400">
            <span className="text-cyan-300">sayali@portfolio</span>:~$ <span className="animate-pulse">_</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl">
        {title}
      </h2>
    </div>
  );
}