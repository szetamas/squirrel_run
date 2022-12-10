class Mine extends MovingObject {
  constructor(dom, speedX, spawnTo, posX, posY) {
    super(dom, speedX, spawnTo, posX, posY);
  }

  spawn() {
    this.posX = this.spawnTo + Math.floor(Math.random() * MINESPAWN);
    this.dom.style.left = this.posX + "px";
  }

  touchedBy(thing) {
    if (
      this.posX < thing.posX + thing.dom.width &&
      thing.posX < this.posX + this.dom.width - 50 &&
      thing.posY < this.posY + this.dom.height
    ) {
      return true;
    } else {
      return false;
    }
  }

  moveLeft() {
    this.posX = this.posX - this.speedX;
    this.dom.style.left = this.posX + "px";
  }
}
