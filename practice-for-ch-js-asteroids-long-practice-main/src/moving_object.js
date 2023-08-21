// Base class for anything that moves.
// Most important methods are MovingObject.prototype.move,
//MovingObject.prototype.draw(ctx), and MovingObject.prototype.isCollidedWith(otherMovingObject).
class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

export default MovingObject;
