import readlineSync from 'readline-sync';

function introduce() {
  const name = readlineSync.question('Your answer: ');
  return name;
}

export { introduce };