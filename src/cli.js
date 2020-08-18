import readlineSync from 'readline-sync';

function introduce() {
  const name = readlineSync.question('May I have your name? ');
  return name;
}

function answer() {
  const name = readlineSync.question('Your answer: ');
  return name;
}

function random(min = 1, max = 99) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function isItEven(num) {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
}

function welcome() {
  console.log('Welcome to the Brain Games!');
  const name = introduce();
  console.log(`Hello, ${name}!`);
  return name;
}

function goodBy(result, name) {
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

function GCD(x, y) {
  if (y > x) {
    return GCD(y, x);
  }
  if (!y) {
    return x;
  }
  return GCD(y, x % y);
}

function isItPrime(num) {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

export {
  introduce, answer, random, isItEven, welcome, goodBy, GCD, isItPrime,
};
