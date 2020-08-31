import random from '../utils.js';
import run from '../index.js';

const isEven = (num) => (num % 2 === 0);

const genGameData = () => {
  const question = random();
  return {
    rightAnswer: isEven(question) === true ? 'yes' : 'no',
    question: String(question),
  };
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameEven = () => {
  run(description, genGameData);
};

export default startGameEven;
