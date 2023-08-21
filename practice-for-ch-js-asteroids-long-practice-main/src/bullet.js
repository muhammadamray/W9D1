// Kill spacerocks with this. Also a MovingObject subclass.
import MovingObject from "./moving_object";
class Bullet extends MovingObject {
  constructor(options) {
    super(options);
  }
}

export default Bullet;
