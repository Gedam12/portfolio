import React from "react";
import FindTheBugGame from "./FindTheBugGame";
import AskMeChatbot from "./AskMeChatbot";
import SnakeGame from "./SnakeGame";

export default function PortfolioPlayground() {
  return (
    <section className="bg-slate-950 text-white px-6 py-16 space-y-16 rounded-3xl border border-slate-800">
      
      <h2 className="text-4xl font-bold text-center">
        Interactive Playground 🎮
      </h2>

      {/* 🧠 FIND BUG */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2">🧠 Find the Bug</h3>
        <p className="text-slate-300 mb-4">
          Test your debugging skills by identifying issues in code snippets.
        </p>
        <FindTheBugGame />
      </div>

      {/* 🤖 CHATBOT */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2">🤖 Ask Me Anything</h3>
        <p className="text-slate-300 mb-4">
          Chat with my portfolio assistant to learn more about my skills and projects.
        </p>
        <AskMeChatbot />
      </div>

      {/* 🎮 SNAKE */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2">🎮 Snake Game</h3>
        <p className="text-slate-300 mb-4">
          Use arrow keys to play the classic snake game.
        </p>
        <SnakeGame />
      </div>

    </section>
  );
}