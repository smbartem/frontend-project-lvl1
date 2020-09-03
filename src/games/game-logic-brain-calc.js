import random from '../utils.js';
import run from '../index.js';

const signs = ['+', '*', '-'];

const calculateRightAnswer = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown mathematical sign in expression!');
  }
};

const genGameData = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  const sign = signs[random(1, signs.length) - 1];
  return {
    rightAnswer: String(calculateRightAnswer(num1, num2, sign)),
    question: `${num1} ${sign} ${num2}`,
  };
};

const description = 'What is the result of the expression?';

const startGameCalculate = () => {
  run(description, genGameData);
};

export default startGameCalculate;
