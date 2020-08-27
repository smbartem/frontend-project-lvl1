import random from '../utils.js';
import run from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const genGameData = () => {
  const num = random(1, 100);
  return {
    rightAnswer: String(isPrime(num)),
    question: `${num}`,
  };
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGamePrime = () => {
  run(description, genGameData);
};

export default startGamePrime;
