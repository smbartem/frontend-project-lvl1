import random from '../utils.js';
import run from '../index.js';

const genGameData = () => {
  const arr = [];
  const num1 = random(1, 10);
  arr.push(num1);
  const step = random(1, 10);
  const hiddenNumber = random(0, 9);
  for (let i = 0; i < 9; i += 1) {
    arr.push(arr[i] + step);
  }
  const rightAnswer = String(arr[hiddenNumber]);
  arr[hiddenNumber] = '..';
  return {
    rightAnswer,
    question: `${arr.join(' ')}`,
  };
};

const description = 'What number is missing in the progression?';

const startGameProgression = () => {
  run(description, genGameData);
};

export default startGameProgression;
