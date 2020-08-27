import random from '../utils.js';
import run from '../index.js';

const genGameData = () => {
  const signs = ['+', '*', '-'];
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  const operand = signs[random(1, 3) - 1];
  let rightAnswer;
  if (operand === '+') {
    rightAnswer = String(num1 + num2);
  }
  if (operand === '-') {
    rightAnswer = String(num1 - num2);
  }
  if (operand === '*') {
    rightAnswer = String(num1 * num2);
  }
  return {
    rightAnswer,
    question: `${num1} ${operand} ${num2}`,
  };
};

const description = 'What is the result of the expression?';

const startGameCalculate = () => {
  run(description, genGameData);
};

export default startGameCalculate;
