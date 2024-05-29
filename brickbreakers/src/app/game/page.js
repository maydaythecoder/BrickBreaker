// src/app/game/page.js
import { useEffect, useRef } from "react";
import initGame from "./index";

export default function GamePage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    initGame(canvas);
  }, []);

  return (
    <div>
      <canvas
        id="gameScreen"
        ref={canvasRef}
        width="800"
        height="600"
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
}
