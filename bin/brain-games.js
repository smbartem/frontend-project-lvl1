import {
  random, isItEven, GCD,
} from '../src/cli.js';

function gameFunctionEven() {
  const questionNum = random();
  const rightAnswer = isItEven(questionNum);
  console.log(`Question: ${questionNum}`);
  return rightAnswer;
}

function gameFunctionCalc() {
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
  console.log(`Question: ${num1} ${operand} ${num2}`);
  return rightAnswer;
}

function gameFunctionGCD() {
  const num1 = random(1, 100);
  const num2 = random(1, 100);
  const rightAnswer = String(GCD(num1, num2));
  console.log(`Question: ${num1} ${num2}`);
  return rightAnswer;
}

export { gameFunctionEven, gameFunctionCalc, gameFunctionGCD };
