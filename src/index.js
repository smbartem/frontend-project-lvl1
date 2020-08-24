import readlineSync from 'readline-sync';

const engine = (description, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  let result;
  for (result = 0; result < 3; result += 1) {
    const innerFuncRes = gameFunction();
    const rightAnswer = innerFuncRes.value;
    console.log(innerFuncRes.question);
    const ans = readlineSync.question('Your answer: ');
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
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default engine;
