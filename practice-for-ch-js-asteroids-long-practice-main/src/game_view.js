// Stores a Game instance.
// Stores a canvas context to draw the game into.
// Installs key listeners to move the ship and fire bullets.
// Installs a timer to call Game.prototype.step.
import Game from "./game.js";
import MovingObject from "./moving_object.js";
class GameView {
  constructor(ctx) {}
}

const canvasEl = document.getElementById("game-canvas");
// canvasEl.width = Game.DIM_X;
// canvasEl.height = Game.DIM_Y;
const ctx = canvasEl.getContext("2d");
console.log("Webpack is working!");

const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "red",
});

mo.draw(ctx);
