import random from '../../src/utils.js';
import engine from '../../src/index.js';

const gameFunctionCalc = () => {
  const signs = ['+', '*', '-'];
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  const operand = signs[random(1, 3) - 1];
  const result = {};
  if (operand === '+') {
    result.value = String(num1 + num2);
  }
  if (operand === '-') {
    result.value = String(num1 - num2);
  }
  if (operand === '*') {
    result.value = String(num1 * num2);
  }
  result.question = `Question: ${num1} ${operand} ${num2}`;
  return result;
};

const describtion = 'What is the result of the expression?';

const startGameFunctionCalc = () => {
  engine(describtion, gameFunctionCalc);
};

export default startGameFunctionCalc;
