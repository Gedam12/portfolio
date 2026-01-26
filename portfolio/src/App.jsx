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
]; // Correctly closing the array here

const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    school: "Boston University", 
    period: "Graduated 2024",
    details: "Specialized in Artificial Intelligence and Cloud Computing. GPA: 3.8/4.0"
  }
];