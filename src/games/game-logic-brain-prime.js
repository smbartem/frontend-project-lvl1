import random from '../utils.js';
import run from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameData = () => {
  const num = random(1, 100);
  return {
    rightAnswer: isPrime(num) ? 'yes' : 'no',
    question: String(num),
  };
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGamePrime = () => {
  run(description, genGameData);
};

export default startGamePrime;
