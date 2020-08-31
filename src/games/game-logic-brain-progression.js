import random from '../utils.js';
import run from '../index.js';

const progressionLength = 9;

const genProgression = (firstElement, step, length) => {
  const progression = [];
  progression.push(firstElement);
  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const genGameData = () => {
  const firstElement = random(1, 10);
  const step = random(1, 10);
  const hiddenNumber = random(0, progressionLength);
  const progression = genProgression(firstElement, step, progressionLength);
  const rightAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  return {
    rightAnswer,
    question: progression.join(' '),
  };
};

const description = 'What number is missing in the progression?';

const startGameProgression = () => {
  run(description, genGameData);
};

export default startGameProgression;
