class Squirrel {
  constructor(dom, posX = -250, posY = 0, ableToJump = true) {
    this.dom = dom;
    this.posX = posX;
    this.posY = posY;
    this.ableToJump = ableToJump;
    this.speedY = 10;
    this.dom.style.position = 'absolute';
    this.dom.style.left = this.posX + 'px';
    this.dom.style.bottom = this.posY + 'px';
  }

  start() {
    this.dom.src = 'src/squirrel.gif';
    this.posX = 10;
    this.posY = 0;
    this.dom.style.left = this.posX + 'px';
    this.dom.style.bottom = this.posY + 'px';
    this.ableToJump = true;
    this.dom.width = 250;
  }

  stop() {
    this.dom.src = 'src/squirrel_stop.png';
  }

  jump() {
    if (this.ableToJump) {
      this.ableToJump = false;
      this.speedY = 10;
      const jumping = window.setInterval(() => {
        this.moveUp();
        if (this.dom.src.indexOf('explosion.png') >= 0) {
          clearInterval(jumping);
          clearInterval(slowingJump);
        } else if (this.posY <= 0) {
          this.ableToJump = true;
          clearInterval(jumping);
          clearInterval(slowingJump);
          this.posY = 0;
        }
      }, 2);
      const slowingJump = window.setInterval(() => {
        this.speedY--;
      }, 25);
    }
  }

  moveUp() {
    this.posY = this.posY + this.speedY;
    this.dom.style.bottom = this.posY + 'px';
  }

  explode() {
    this.dom.src = 'src/explosion.png';
    //delay is a "graphic trick"
    window.setTimeout(() => {
      this.ableToJump = false;
      this.dom.width = parseInt(this.dom.width) * 2;
      this.posY = this.posY - 100;
      this.posX = this.posX - 50;
      this.dom.style.bottom = this.posY + 'px';
      this.dom.style.left = this.posX + 'px';
    }, 10);
  }
}
