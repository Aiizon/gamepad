import './style.css';

const gamepad = document.querySelector('#gamepad');
const player = document.querySelector('#player');
let positionLeft = 50;
let positionTop = 50;

player.style.setProperty('left', `${positionLeft}%`);
player.style.setProperty('top', `${positionTop}%`);

function movePlayer(direction) {
  switch (direction) {
    case 'up':
      positionTop -= 10;
      break;
    case 'right':
      positionLeft += 10;
      break;
    case 'down':
      positionTop += 10;
      break;
    case 'left':
      positionLeft -= 10;
      break;
  }
  if (positionLeft < 0) {
    positionLeft = 0;
  }
  if (positionLeft > 100) {
    positionLeft = 100;
  }
  if (positionTop < 0) {
    positionTop = 0;
  }
  if (positionTop > 100) {
    positionTop = 100;
  }
  player.style.setProperty('left', `${positionLeft}%`);
  player.style.setProperty('top', `${positionTop}%`);
}

for (const element of gamepad.children) {
  element.addEventListener('click', event => {
    const direction = event.target.id;
    movePlayer(direction);
  });
}
