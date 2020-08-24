import random from '../../src/utils.js';
import engine from '../../src/index.js';

const isItEven = (num) => {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
};

const gameFunctionEven = () => {
  const questionNum = random();
  const result = {
    value: isItEven(questionNum),
    question: `Question: ${questionNum}`,
  };
  return result;
};

const describtion = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameFunctionEven = () => {
  engine(describtion, gameFunctionEven);
};

export default startGameFunctionEven;
