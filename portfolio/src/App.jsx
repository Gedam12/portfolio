import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiVite,
  SiTailwindcss,
  SiNetlify,
} from "react-icons/si";

const skills = [
  "Python",
  "Node.js",
  "React",
  "FastAPI",
  "AWS",
  "Docker",
  "PostgreSQL",
  "Redis",
  "CI/CD",
  "Microservices",
  "REST APIs",
  "Cloud Engineering",
];

const experience = [
  {
    period: "2025 — Present",
    role: "Software Engineer",
    company: "JPMorgan Chase & Co.",
    points: [
      "Build and improve backend services for high-volume financial workflows.",
      "Work on performance, reliability, deployment automation, and scalable engineering practices.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Software Engineer",
    company: "UnitedHealth Group",
    points: [
      "Contributed to cloud migration and backend modernization work.",
      "Focused on production readiness, delivery speed, and maintainable systems.",
    ],
  },
  {
    period: "2021 — 2023",
    role: "M.S. in Computer Science",
    company: "New England College",
    points: [
      "Focused on software engineering, AI concepts, and cloud-oriented systems.",
    ],
  },
];

const projects = [
  {
    title: "Sentinel Intelligence System",
    description:
      "A privacy-focused local AI monitoring system designed around autonomous workflows and local models.",
    tech: ["Python", "FastAPI", "Ollama", "Llama 3"],
    link: "https://github.com/Gedam12/Sentinel-Intelligence-System",
  },
  {
    title: "Portfolio Platform",
    description:
      "A modern portfolio built with React and Vite to present experience, projects, and skills in a clean way.",
    tech: ["React", "Vite", "Tailwind CSS"],
    link: "https://github.com/Gedam12/portfolio",
  },
  {
    title: "Backend Engineering Work",
    description:
      "Production-focused backend work around APIs, distributed systems, cloud workflows, and performance improvements.",
    tech: ["Python", "Node.js", "PostgreSQL", "AWS"],
    link: "https://github.com/Gedam12",
  },
];

const buildStack = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-400" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "React", icon: FaReact, color: "text-cyan-300" },
  { name: "Vite", icon: SiVite, color: "text-violet-300" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-300" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
  { name: "GitHub", icon: FaGithub, color: "text-slate-200" },
  { name: "Netlify", icon: SiNetlify, color: "text-emerald-300" },
];

const links = {
  github: "https://github.com/Gedam12",
  linkedin: "https://www.linkedin.com/in/sayali-mukund-gedam/",
  email: "mailto:sayaligedam12@gmail.com",
};

const stars = [
  { top: "8%", left: "10%", size: "small" },
  { top: "14%", left: "22%", size: "medium" },
  { top: "10%", left: "48%", size: "small" },
  { top: "16%", left: "72%", size: "large" },
  { top: "12%", left: "88%", size: "small" },
  { top: "24%", left: "14%", size: "large" },
  { top: "22%", left: "36%", size: "small" },
  { top: "30%", left: "60%", size: "medium" },
  { top: "28%", left: "84%", size: "small" },
  { top: "38%", left: "8%", size: "small" },
  { top: "42%", left: "28%", size: "medium" },
  { top: "48%", left: "46%", size: "large" },
  { top: "44%", left: "76%", size: "small" },
  { top: "54%", left: "90%", size: "medium" },
  { top: "62%", left: "12%", size: "large" },
  { top: "66%", left: "34%", size: "small" },
  { top: "70%", left: "58%", size: "medium" },
  { top: "74%", left: "82%", size: "large" },
  { top: "84%", left: "18%", size: "small" },
  { top: "88%", left: "42%", size: "medium" },
  { top: "82%", left: "66%", size: "small" },
  { top: "90%", left: "86%", size: "large" },
];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-slate-100">
      <BackgroundDecor />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-wide text-white">
            Sayali Gedam
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
            <a href="#experience" className="transition hover:text-cyan-300">Experience</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:pb-28 md:pt-28"
        >
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
              Software Engineer • Backend • Cloud • AI
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Building scalable software with a clean, modern engineering mindset.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I build backend systems, APIs, and cloud-first software with a strong
              focus on reliability, performance, and maintainability. I also enjoy
              shaping practical AI-driven products that feel useful and production-ready.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-cyan-300 px-5 py-3 font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(34,211,238,0.28)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition duration-300 hover:border-cyan-300 hover:text-cyan-200"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard value="5+" label="Years Experience" />
              <StatCard value="Backend" label="Core Focus" />
              <StatCard value="Cloud" label="Production Mindset" />
              <StatCard value="AI" label="Growing Specialty" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-8">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-cyan-200">
              Built with
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {buildStack.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center transition hover:-translate-y-1 hover:border-cyan-300/20"
                  >
                    <Icon className={`mx-auto text-3xl ${item.color}`} />
                    <p className="mt-3 text-sm text-slate-200">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="About"
            title="A portfolio that feels calm, clear, and strong."
          />
          <div className="max-w-3xl rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="leading-8 text-slate-300">
              My work has focused on scalable backend engineering, cloud systems,
              performance improvements, and reliable delivery. I want this portfolio
              to reflect the same mindset: strong structure, better readability,
              and a polished visual experience without feeling noisy.
            </p>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Skills"
            title="Core tools and technologies I enjoy working with."
          />
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/15"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Experience"
            title="A tighter timeline with the most important details."
          />
          <div className="space-y-6">
            {experience.map((item) => (
              <div
                key={`${item.period}-${item.role}`}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-300/20 hover:bg-white/[0.06]"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="text-cyan-200">{item.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">{item.period}</p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work presented in a cleaner, more modern way."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07] hover:shadow-[0_12px_30px_rgba(15,23,42,0.4)]"
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-medium text-cyan-200 transition group-hover:text-cyan-100"
                >
                  View Code →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-purple-500/10 p-8 backdrop-blur-xl md:p-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Let’s build something meaningful.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              I’m open to software engineering opportunities across backend, cloud,
              platform, and AI-focused product work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={links.email}
                className="rounded-2xl bg-cyan-300 px-5 py-3 font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(34,211,238,0.25)]"
              >
                Email Me
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                GitHub
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Sayali Gedam
      </footer>
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.22),transparent_24%),radial-gradient(circle_at_85%_10%,rgba(168,85,247,0.20),transparent_22%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.18),transparent_26%),linear-gradient(to_bottom,#020617,#030712,#000000)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:52px_52px] opacity-30" />

      <div className="orb orb-cyan absolute -top-24 left-[8%] h-72 w-72 rounded-full blur-3xl" />
      <div className="orb orb-purple absolute top-[18%] right-[6%] h-80 w-80 rounded-full blur-3xl" />
      <div className="orb orb-blue absolute bottom-[8%] left-[18%] h-64 w-64 rounded-full blur-3xl" />

      <div className="absolute left-[8%] top-[18%] h-28 w-28 rounded-full border border-cyan-300/18 shadow-[0_0_30px_rgba(34,211,238,0.08)]" />
      <div className="absolute left-[7.2%] top-[17.1%] h-32 w-32 rounded-full border border-cyan-300/8" />
      <div className="absolute right-[10%] top-[26%] h-20 w-20 rotate-45 border border-purple-300/20 shadow-[0_0_24px_rgba(168,85,247,0.08)]" />
      <div className="absolute bottom-[18%] right-[14%] h-36 w-36 rounded-full border border-sky-300/16" />
      <div className="absolute bottom-[17.1%] right-[13.1%] h-40 w-40 rounded-full border border-sky-300/8" />
      <div className="absolute left-[48%] top-[12%] h-10 w-10 rotate-45 border border-white/16" />

      {stars.map((star, i) => (
        <span
          key={i}
          className={`star star-${star.size} absolute`}
          style={{ top: star.top, left: star.left }}
        />
      ))}
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

function StatCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-cyan-300/20">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  );
}