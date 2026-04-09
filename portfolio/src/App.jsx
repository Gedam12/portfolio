import React from "react";
import myResume from "./resume.pdf";

const projects = [
  {
    title: "Sentinel Intelligence System",
    metric: "Privacy-first AI",
    description:
      "Designed an autonomous monitoring engine using local Llama models with a focus on privacy, resilience, and practical workflows.",
    tech: ["Python", "FastAPI", "Ollama", "Llama 3"],
    link: "https://github.com/Gedam12/Sentinel-Intelligence-System",
  },
  {
    title: "High-Volume Backend Engineering",
    metric: "Scale + performance",
    description:
      "Built and improved backend systems for high-throughput transaction workflows with emphasis on latency, reliability, and deployment efficiency.",
    tech: ["Node.js", "Python", "Redis", "PostgreSQL"],
    link: "https://github.com/Gedam12",
  },
  {
    title: "Cloud Migration Work",
    metric: "Modernization",
    description:
      "Worked on cloud migration and backend modernization efforts with focus on delivery speed, cost awareness, and operational stability.",
    tech: ["AWS", "Docker", "FastAPI", "CI/CD"],
    link: "https://github.com/Gedam12",
  },
];

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

const timeline = [
  {
    year: "2025 — Present",
    title: "Software Engineer",
    place: "JPMorgan Chase & Co.",
    description:
      "Working on backend systems, performance improvements, deployment workflows, and scalable engineering practices.",
  },
  {
    year: "2023 — 2024",
    title: "Software Engineer",
    place: "UnitedHealth Group",
    description:
      "Contributed to cloud-focused engineering work, backend modernization, and production-ready delivery improvements.",
  },
  {
    year: "2021 — 2023",
    title: "M.S. in Computer Science",
    place: "New England College",
    description:
      "Focused on software engineering, AI concepts, and cloud-oriented systems thinking.",
  },
  {
    year: "2016 — 2020",
    title: "B.E. in Electronics Engineering",
    place: "GH Raisoni College of Engineering",
    description:
      "Built a strong engineering foundation in systems thinking, problem solving, and technical rigor.",
  },
];

const links = {
  github: "https://github.com/Gedam12",
  linkedin: "https://www.linkedin.com/in/sayali-mukund-gedam/",
  email: "mailto:sayaligedam12@gmail.com",
};

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07111f] text-slate-100 selection:bg-cyan-300 selection:text-slate-900">
      {/* Premium background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(to_bottom,#07111f,#08131f,#0a1626)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-25" />
        <div className="absolute left-1/2 top-[-120px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-40px] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[12%] left-[-60px] h-[260px] w-[260px] rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-wide text-white">
            Sayali Gedam
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
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
            <span className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
              Software Engineer • Backend • Cloud • AI-ready
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
                className="rounded-2xl bg-cyan-300 px-5 py-3 font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(34,211,238,0.25)]"
              >
                View Projects
              </a>

              <a
                href={myResume}
                download
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition duration-300 hover:border-cyan-300 hover:text-cyan-200"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard value="5+" label="Years experience" />
              <StatCard value="Backend" label="Core focus" />
              <StatCard value="Cloud" label="Production mindset" />
              <StatCard value="AI" label="Growing specialty" />
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
              performance improvements, and reliable delivery. I wanted this portfolio
              to reflect the same mindset: clean structure, better readability, and a
              polished visual experience without making it overly flashy.
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
            title="A tighter timeline with only the most important details."
          />

          <div className="relative space-y-6 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/10 md:before:left-1/2">
            {timeline.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                className="relative md:grid md:grid-cols-2 md:gap-10"
              >
                <div className={`hidden md:block ${index % 2 === 0 ? "" : "md:order-2"}`}>
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-300/20 hover:bg-white/[0.06]">
                    <p className="text-sm text-cyan-200">{item.year}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-slate-300">{item.place}</p>
                    <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-0 top-6 h-6 w-6 rounded-full border-4 border-[#07111f] bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] md:left-1/2 md:-translate-x-1/2" />

                <div className="pl-10 md:hidden">
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <p className="text-sm text-cyan-200">{item.year}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-slate-300">{item.place}</p>
                    <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
                  </div>
                </div>

                <div className={`hidden md:block ${index % 2 === 0 ? "md:order-2" : ""}`} />
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
                <p className="text-sm uppercase tracking-[0.18em] text-cyan-200/80">
                  {project.metric}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
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
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-blue-500/10 p-8 backdrop-blur-xl md:p-10">
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