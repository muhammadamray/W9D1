// Holds collections of the asteroids, bullets, and your ship.
// Game.prototype.step method calls Game.prototype.move on all the objects, and Game.prototype.checkCollisions checks for colliding objects.
// Game.prototype.draw(ctx) draws the game.
// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.
import Ship from "./ship";
import Asteroid from "./asteroid";
import Bullet from "./bullet";
import MovingObject from "./moving_object";

class Game {
  static DIM_X = 500;
  static DIM_Y = 500;
  static NUM_ASTEROIDS = 10;
  constructor() {
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship({ pos: this.randomPosition() });
    this.bullets = [];
  }
}

export default Game;

const canvasEl = document.getElementById("game-canvas");
// canvasEl.width = Game.DIM_X;
// canvasEl.height = Game.DIM_Y;
const ctx = canvasEl.getContext("2d");

const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "red",
});
console.log(mo);
mo.draw(ctx);
//ctx.clearRect(0, 0, 500, 500);
mo.move();
mo.draw(ctx);

const ast = new Asteroid([100, 100]);
console.log(ast);
