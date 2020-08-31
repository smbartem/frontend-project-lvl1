import readlineSync from 'readline-sync';

const quantityOfGameRounds = 3;

const run = (description, genGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let round = 0; round < quantityOfGameRounds; round += 1) {
    const { rightAnswer, question } = genGameData();
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (usersAnswer !== rightAnswer) {
      console.log(
        `${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.
        Let's try again, ${name}!`,
      );
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default run;
