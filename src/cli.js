import readlineSync from 'readline-sync';

function introduce() {
  const name = readlineSync.question('May I have your name? ');
  return name;
}

function answer() {
  const name = readlineSync.question('Your answer: ');
  return name;
}

function random() {
  const min = 1;
  const max = 100;
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function isItEven(num) {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
}

export {
  introduce, answer, random, isItEven,
};
