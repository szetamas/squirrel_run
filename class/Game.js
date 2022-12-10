class Game {
  constructor(dom, Squirrel, Mine, bg1, bg2) {
    this.dom = dom;
    this.points = -1;
    this.run = false;
    this.speed = STARTSPEED;
    this.squirrel = Squirrel;
    this.mine = Mine;
    this.bg1 = bg1;
    this.bg2 = bg2;
  }

  start() {
    if (!this.run) {
      this.points = -1;
      this.run = true;
      this.speed = STARTSPEED;
      this.setSpeeds(this.speed);
      this.squirrel.start();
      this.bg1.move = true;
      this.bg2.move = true;
      this.mine.move = true;
      this.nextRound();
      this.moving();
    }
  }

  moving() {
    window.setTimeout(() => {
      if (this.run) {
        if (this.mine.touchedBy(this.squirrel)) {
          this.run = false;
          this.mine.spawn();
          this.squirrel.explode();
          this.bg1.move = false;
          this.bg2.move = false;
          this.writeStart(RESTART);
        } else {
          this.mine.moveLeft();
          this.bg1.moveLeft();
          this.bg2.moveLeft();
          if (this.mine.posX + this.mine.dom.width < 0) {
            this.nextRound();
          }
          this.moving();
        }
      }
    }, 2);
  }

  stop() {
    this.run = false;
    this.squirrel.stop();
  }

  nextRound() {
    this.points++;
    this.dom.innerHTML = 'Points: ' + this.points;
    if (this.points >= POINTSFORWIN) {
      this.stop();
      this.writeStart(`${WIN}${RESTART}`);
    } else {
      this.mine.spawn();
    }
    if (this.points % POINTSFORSPEEDUP === 0 && this.points !== 0) {
      this.speedUp();
    }
  }

  speedUp() {
    this.speed++;
    this.setSpeeds(this.speed);
  }

  setSpeeds(speed) {
    this.mine.setSpeed(speed);
    this.bg1.setSpeed(speed);
    this.bg2.setSpeed(speed);
  }

  writeStart(tex) {
    this.dom.innerHTML += `<span id="start">${tex}</span>`;
    this.dom.querySelector('#start').addEventListener('click', () => {
      this.start();
    });
  }
}
