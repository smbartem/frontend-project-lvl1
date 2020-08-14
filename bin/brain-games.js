#!/usr/bin/env node
import introduce from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = introduce();
console.log(`Hello, ${name}!`);
