import React, { useState } from "react";

export default function FindTheBugGame() {
  const questionsByLanguage = {
    JavaScript: [
      {
        title: "Array Loop Bug",
        code: `const arr = [10, 20, 30];

for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}`,
        options: [
          "Use i < arr.length",
          "Use arr.size instead of arr.length",
          "Use console.print instead of console.log",
          "Start i from 1",
        ],
        answer: "Use i < arr.length",
        explanation:
          "Array index starts from 0 and ends at length - 1. Using <= accesses one extra undefined value.",
      },
    ],

    React: [
      {
        title: "React State Bug",
        code: `const [count, setCount] = useState(0);

function increase() {
  count = count + 1;
}`,
        options: [
          "Use setCount(count + 1)",
          "Use var instead of const",
          "Remove useState",
          "Change function name",
        ],
        answer: "Use setCount(count + 1)",
        explanation:
          "React state should not be changed directly. Use the setter function like setCount().",
      },
    ],

    Python: [
      {
        title: "Mutable Default Argument Bug",
        code: `def add_item(item, items=[]):
    items.append(item)
    return items`,
        options: [
          "Use items=None and create a new list inside",
          "Use tuple instead of list everywhere",
          "Remove return statement",
          "Rename item variable",
        ],
        answer: "Use items=None and create a new list inside",
        explanation:
          "Default list values are shared between function calls in Python. Use None and initialize inside the function.",
      },
    ],

    API: [
      {
        title: "API Await Bug",
        code: `async function getUsers() {
  const response = fetch('/api/users');
  const data = await response.json();
  return data;
}`,
        options: [
          "Add await before fetch",
          "Remove async",
          "Use response.text() only",
          "Return response directly",
        ],
        answer: "Add await before fetch",
        explanation:
          "fetch returns a Promise. You must await it before calling response.json().",
      },
    ],
  };

  const languages = Object.keys(questionsByLanguage);

  const [language, setLanguage] = useState("JavaScript");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestions = questionsByLanguage[language];
  const current = currentQuestions[index];
  const isCorrect = selected === current.answer;

  function changeLanguage(newLanguage) {
    setLanguage(newLanguage);
    setIndex(0);
    setSelected("");
    setShowAnswer(false);
  }

  function handleOptionClick(option) {
    setSelected(option);
    setShowAnswer(true);
  }

  function nextQuestion() {
    setIndex((index + 1) % currentQuestions.length);
    setSelected("");
    setShowAnswer(false);
  }

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
      <div className="mb-5">
        <p className="text-sm text-slate-300 mb-3">Choose a language:</p>

        <div className="flex flex-wrap gap-2">
          {languages.map((item) => (
            <button
              key={item}
              onClick={() => changeLanguage(item)}
              className={`px-4 py-2 rounded-xl text-sm border transition ${
                language === item
                  ? "bg-cyan-500 text-slate-950 border-cyan-400"
                  : "bg-slate-800 text-slate-200 border-slate-700 hover:border-cyan-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl font-bold text-white">{current.title}</h4>
        <span className="text-xs bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full">
          {language}
        </span>
      </div>

      <pre className="bg-black p-4 rounded-lg text-green-300 text-sm mb-5 overflow-x-auto">
        <code>{current.code}</code>
      </pre>

      <p className="text-slate-300 text-sm mb-3">
        What is the bug in this code?
      </p>

      <div className="space-y-3">
        {current.options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`w-full text-left px-4 py-3 rounded-xl border transition ${
              selected === option
                ? option === current.answer
                  ? "bg-green-500/20 border-green-400 text-green-200"
                  : "bg-red-500/20 border-red-400 text-red-200"
                : "bg-slate-800 border-slate-700 text-slate-200 hover:border-cyan-400"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {showAnswer && (
        <div className="mt-5 rounded-xl bg-slate-800 border border-slate-700 p-4">
          <p className={isCorrect ? "text-green-300" : "text-red-300"}>
            {isCorrect ? "✅ Correct!" : "❌ Not quite!"}
          </p>
          <p className="text-slate-300 text-sm mt-2">{current.explanation}</p>
        </div>
      )}

      <button
        onClick={nextQuestion}
        className="mt-5 w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-3 rounded-xl transition"
      >
        Next Challenge →
      </button>
    </div>
  );
}