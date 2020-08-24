import random from '../../src/utils.js';
import engine from '../../src/index.js';

const isItPrime = (num) => {
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

const gameFunctionPrime = () => {
  const num = random(1, 100);
  const result = {
    value: String(isItPrime(num)),
    question: `Question: ${num}`,
  };
  return result;
};

const describtion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGameFunctionPrime = () => {
  engine(describtion, gameFunctionPrime);
};

export default startGameFunctionPrime;
