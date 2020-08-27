import random from '../utils.js';
import run from '../index.js';

const isEven = (num) => (num % 2 === 0);

const isEvenAnswer = (boolean) => {
  if (boolean === true) {
    return 'yes';
  }
  return 'no';
};

const genGameData = () => {
  const question = random();
  return {
    rightAnswer: isEvenAnswer(isEven(question)),
    question: `${question}`,
  };
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameEven = () => {
  run(description, genGameData);
};

export default startGameEven;
