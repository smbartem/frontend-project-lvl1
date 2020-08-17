import { introduce } from '../src/cli.js';

function welcome() {
  console.log('Welcome to the Brain Games!');
  const name = introduce();
  console.log(`Hello, ${name}!`);
  return name;
}

export default welcome;
