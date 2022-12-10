const WIN = '&nbsp;&nbsp;&nbsp;WIN!!!';
const RESTART = '&nbsp;&nbsp;&nbsp;Restart&nbsp;&#x21bb';
const BGSPAWN = 3400;
const MINESPAWN = 1600;
const STARTSPEED = 5;
const POINTSFORWIN = 50;
const POINTSFORSPEEDUP = 5;

const mineFieldHtml = document.getElementById('mineField');
const background1Html = document.getElementById('background1');
const background1 = new Background(background1Html, STARTSPEED, BGSPAWN);
const background2Html = document.getElementById('background2');
const background2 = new Background(
  background2Html,
  STARTSPEED,
  BGSPAWN,
  BGSPAWN + 40
);
const squirrelHtml = document.getElementById('mySquirrel');
const mySquirrel = new Squirrel(squirrelHtml, STARTSPEED);
const mineHtml = document.getElementById('mine1');
const mine1 = new Mine(mineHtml, STARTSPEED, MINESPAWN, MINESPAWN);
const gameTextHtml = document.getElementById('gameText');
const game = new Game(
  gameTextHtml,
  mySquirrel,
  mine1,
  background1,
  background2
);

document.body.addEventListener('keydown', (ev) => {
  if (ev.key === 'Enter') {
    game.start();
  } else {
    mySquirrel.jump();
  }
});

game.writeStart('Start (Click or Enter)');
