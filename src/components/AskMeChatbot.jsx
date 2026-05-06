import React, { useState } from "react";

export default function AskMeChatbot() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! Ask me about Sayali's skills, projects, or experience 👋" },
  ]);
  const [input, setInput] = useState("");

  // 🔥 multiple variations
  const responses = {
    skills: [
      "I work with Python, React, Node.js, AWS, Docker, and PostgreSQL.",
      "My main stack includes backend systems with Python and Node.js, plus React for frontend.",
      "I have experience with APIs, cloud (AWS), Docker, and scalable backend development.",
    ],
    projects: [
      "I’ve built AI tools, backend systems, and automation pipelines.",
      "Some of my work includes AI-based systems and scalable API-driven applications.",
      "I focus on building practical systems — automation, analytics, and backend services.",
    ],
    experience: [
      "I have experience working on backend systems, APIs, and cloud-based applications.",
      "I’ve worked on scalable backend systems with a focus on performance and reliability.",
      "My experience includes building production-ready services and improving system efficiency.",
    ],
    default: [
      "Try asking about skills, projects, or experience 😊",
      "You can ask me about Sayali’s skills, projects, or work experience!",
      "I can help with skills, projects, or experience — try one of those!",
    ],
  };

  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function reply(text) {
    const lower = text.toLowerCase();

    if (lower.includes("skill")) return getRandom(responses.skills);
    if (lower.includes("project")) return getRandom(responses.projects);
    if (lower.includes("experience") || lower.includes("work"))
      return getRandom(responses.experience);

    return getRandom(responses.default);
  }

  function send() {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    const botMsg = { role: "bot", text: reply(input) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
      
      <div className="h-60 overflow-y-auto mb-4 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl text-sm ${
              m.role === "bot"
                ? "bg-slate-800 text-slate-200"
                : "bg-purple-500 text-white text-right"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 bg-slate-800 p-3 rounded-xl text-sm outline-none"
          onKeyDown={(e) => e.key === "Enter" && send()}
        />

        <button
          onClick={send}
          className="bg-purple-500 hover:bg-purple-400 px-4 rounded-xl text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}