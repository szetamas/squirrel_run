class MovingObject {
  constructor(dom, speedX, spawnTo, posX = 0, posY = 0) {
    this.dom = dom;
    this.speedX = speedX;
    this.spawnTo = spawnTo;
    this.posX = posX;
    this.posY = posY;
    this.move = true;
    this.dom.style.position = 'absolute';
    this.dom.style.left = this.posX + 'px';
    this.dom.style.bottom = this.posY + 'px';
  }

  setSpeed(speed) {
    this.speedX = speed;
  }

  spawn() {
    this.posX = this.spawnTo;
    this.dom.style.left = this.posX + 'px';
  }

  moveLeft() {
    this.posX = this.posX - this.speedX;
    this.dom.style.left = this.posX + 'px';
    if (this.posX + this.dom.width < 0) {
      this.spawn();
    }
  }
}
