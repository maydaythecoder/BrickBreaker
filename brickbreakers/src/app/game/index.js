// src/app/game/index.js
import Game from "./game";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

export default function initGame(canvas) {
  let ctx = canvas.getContext("2d");

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
}
