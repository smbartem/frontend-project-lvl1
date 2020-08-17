import welcome from './brain-games.js';
import {
  answer, random, isItEven,
} from '../src/cli.js';

const name = welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let result;
for (result = 0; result < 3; result += 1) {
  const question = random();
  const rightAnswer = isItEven(question);
  console.log(`Question: ${question}`);
  const ans = answer();
  if (ans !== rightAnswer) {
    console.log(`${ans} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  console.log('Correct!');
}

if (result === 3) {
  console.log(`Congratulations, ${name}!`);
}
