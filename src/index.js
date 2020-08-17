import {
  answer, welcome, goodBy,
} from './cli.js';

function engine(description, gameFunction) {
  const name = welcome();
  console.log(description);
  let result;
  for (result = 0; result < 3; result += 1) {
    const rightAnswer = gameFunction();
    const ans = answer();
    if (ans === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `${ans} is wrong answer ;(. Correct answer was ${rightAnswer}.
        Let's try again, ${name}!`,
      );
      return;
    }
  }
  goodBy(result, name);
}

export default engine;
