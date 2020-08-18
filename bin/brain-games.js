import {
  random, isItEven, GCD, isItPrime,
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

function gameFunctionProgression() {
  const arr = [];
  const num1 = random(1, 10);
  arr.push(num1);
  const step = random(1, 10);
  const hiddenNumber = random(1, 10);
  for (let i = 0; i < 9; i += 1) {
    arr.push(arr[i] + step);
  }
  const rightAnswer = String(arr[hiddenNumber]);
  arr[hiddenNumber] = '..';
  console.log(`Question: ${arr.join(' ')}`);
  return rightAnswer;
}

function gameFunctionPrime() {
  const num = random(1, 100);
  const rightAnswer = String(isItPrime(num));
  console.log(`Question: ${num}`);
  return rightAnswer;
}

export {
  gameFunctionEven, gameFunctionCalc, gameFunctionGCD, gameFunctionProgression, gameFunctionPrime,
};
