import random from '../utils.js';
import run from '../index.js';

const findGCD = (x, y) => {
  if (!y) {
    return x;
  }
  return findGCD(y, x % y);
};

const genGameData = () => {
  const num1 = random(1, 100);
  const num2 = random(1, 100);
  return {
    rightAnswer: String(findGCD(num1, num2)),
    question: `${num1} ${num2}`,
  };
};

const description = 'Find the greatest common divisor of given numbers.';

const startGameGCD = () => {
  run(description, genGameData);
};

export default startGameGCD;
