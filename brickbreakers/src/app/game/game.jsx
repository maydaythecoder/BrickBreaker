// pages/game.js
import { useEffect, useRef } from "react";
import Game from "../src/game/game";

export default function GamePage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const GAME_WIDTH = 800;
    const GAME_HEIGHT = 600;
    let game = new Game(GAME_WIDTH, GAME_HEIGHT);

    let lastTime = 0;
    function gameLoop(timestamp) {
      let deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

      game.update(deltaTime);
      game.draw(ctx);

      requestAnimationFrame(gameLoop);
    }

    requestAnimationFrame(gameLoop);
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
