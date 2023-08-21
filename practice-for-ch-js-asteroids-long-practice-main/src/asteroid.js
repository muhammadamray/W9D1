import MovingObject from "./moving_object";
import * as Util from "./utils";
//Spacerock. It inherits from MovingObject.
class Asteroid extends MovingObject {
  static COLOR = "gray";
  static RADIUS = 25;
  constructor(pos) {
    super({
      pos: pos,
      vel: Util.randomVec(10),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR,
    });
  }
}

export default Asteroid;
