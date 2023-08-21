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
}

export default MovingObject;
