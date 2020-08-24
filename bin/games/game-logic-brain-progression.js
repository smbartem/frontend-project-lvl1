import random from '../../src/utils.js';
import engine from '../../src/index.js';

const gameFunctionProgression = () => {
  const arr = [];
  const num1 = random(1, 10);
  arr.push(num1);
  const step = random(1, 10);
  const hiddenNumber = random(0, 9);
  for (let i = 0; i < 9; i += 1) {
    arr.push(arr[i] + step);
  }
  const result = {
    value: String(arr[hiddenNumber]),
  };
  arr[hiddenNumber] = '..';
  result.question = `Question: ${arr.join(' ')}`;
  return result;
};

const describtion = 'What number is missing in the progression?';

const startGameFunctionProgression = () => {
  engine(describtion, gameFunctionProgression);
};

export default startGameFunctionProgression;
