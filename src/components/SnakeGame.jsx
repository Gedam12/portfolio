import React, { useEffect, useRef, useState } from "react";

export default function SnakeGame() {
  const boardSize = 12;
  const speed = 300;

  const initialSnake = [
    { x: 5, y: 5 },
    { x: 4, y: 5 },
  ];

  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState({ x: 8, y: 8 });
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const directionRef = useRef(direction);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowUp" && directionRef.current.y !== 1) {
        setDirection({ x: 0, y: -1 });
      } else if (e.key === "ArrowDown" && directionRef.current.y !== -1) {
        setDirection({ x: 0, y: 1 });
      } else if (e.key === "ArrowLeft" && directionRef.current.x !== 1) {
        setDirection({ x: -1, y: 0 });
      } else if (e.key === "ArrowRight" && directionRef.current.x !== -1) {
        setDirection({ x: 1, y: 0 });
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];

        const newHead = {
          x: head.x + directionRef.current.x,
          y: head.y + directionRef.current.y,
        };

        const hitWall =
          newHead.x < 0 ||
          newHead.x >= boardSize ||
          newHead.y < 0 ||
          newHead.y >= boardSize;

        const hitSelf = prevSnake.some(
          (part) => part.x === newHead.x && part.y === newHead.y
        );

        if (hitWall || hitSelf) {
          setGameOver(true);
          setIsPlaying(false);
          return prevSnake;
        }

        const ateFood = newHead.x === food.x && newHead.y === food.y;

        const newSnake = [newHead, ...prevSnake];

        if (ateFood) {
          setScore((prev) => prev + 1);
          setFood(createFood(boardSize, newSnake));
          return newSnake; // ✅ snake grows
        }

        newSnake.pop(); // ✅ normal movement
        return newSnake;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [isPlaying, gameOver, food]);

  function createFood(size, currentSnake) {
    let newFood;

    do {
      newFood = {
        x: Math.floor(Math.random() * size),
        y: Math.floor(Math.random() * size),
      };
    } while (
      currentSnake.some(
        (part) => part.x === newFood.x && part.y === newFood.y
      )
    );

    return newFood;
  }

  function startGame() {
    setSnake(initialSnake);
    setFood({ x: 8, y: 8 });
    setDirection({ x: 1, y: 0 });
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
  }

  function changeDirection(newDirection) {
    setDirection(newDirection);
  }

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <p className="text-green-300 font-semibold">Score: {score}</p>
        <p className="text-slate-400 text-sm">
          {isPlaying ? "Playing" : "Paused"}
        </p>
      </div>

      <p className="text-sm mb-4 text-slate-300">
        Use arrow keys ↑ ↓ ← → or buttons below. Eat the red dot to grow.
      </p>

      <div
        className="grid bg-black p-3 rounded-xl border border-slate-700 mx-auto"
        style={{
          gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
          width: "100%",
          maxWidth: "360px",
          aspectRatio: "1 / 1",
        }}
      >
        {Array.from({ length: boardSize * boardSize }).map((_, i) => {
          const x = i % boardSize;
          const y = Math.floor(i / boardSize);

          const isSnake = snake.some((s) => s.x === x && s.y === y);
          const isFood = food.x === x && food.y === y;

          return (
            <div
              key={i}
              className={`m-[1px] rounded-sm ${
                isSnake
                  ? "bg-green-400"
                  : isFood
                  ? "bg-red-400 rounded-full"
                  : "bg-slate-800"
              }`}
            />
          );
        })}
      </div>

      {gameOver && (
        <p className="text-red-300 text-center text-sm mt-4">
          Game over! Click restart to play again.
        </p>
      )}

      <button
        onClick={startGame}
        className="mt-5 w-full bg-green-500 hover:bg-green-400 text-slate-950 font-semibold py-3 rounded-xl transition"
      >
        {isPlaying ? "Restart Game" : "Start Game"}
      </button>

      <div className="grid grid-cols-3 gap-2 max-w-[180px] mx-auto mt-4">
        <div />

        <button
          onClick={() => changeDirection({ x: 0, y: -1 })}
          className="bg-slate-800 hover:bg-slate-700 rounded-lg py-2"
        >
          ↑
        </button>

        <div />

        <button
          onClick={() => changeDirection({ x: -1, y: 0 })}
          className="bg-slate-800 hover:bg-slate-700 rounded-lg py-2"
        >
          ←
        </button>

        <button
          onClick={() => changeDirection({ x: 0, y: 1 })}
          className="bg-slate-800 hover:bg-slate-700 rounded-lg py-2"
        >
          ↓
        </button>

        <button
          onClick={() => changeDirection({ x: 1, y: 0 })}
          className="bg-slate-800 hover:bg-slate-700 rounded-lg py-2"
        >
          →
        </button>
      </div>
    </div>
  );
}