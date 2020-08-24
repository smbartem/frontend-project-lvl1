import random from '../../src/utils.js';
import engine from '../../src/index.js';

const GCD = (x, y) => {
  if (y > x) {
    return GCD(y, x);
  }
  if (!y) {
    return x;
  }
  return GCD(y, x % y);
};

const gameFunctionGCD = () => {
  const num1 = random(1, 100);
  const num2 = random(1, 100);
  const result = {
    value: String(GCD(num1, num2)),
    question: `Question: ${num1} ${num2}`,
  };
  return result;
};

const describtion = 'Find the greatest common divisor of given numbers.';

const startGameFunctionGCD = () => {
  engine(describtion, gameFunctionGCD);
};

export default startGameFunctionGCD;
