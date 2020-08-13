#!/usr/bin/env node
import { introduce } from '../src/cli.js';
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
let name = introduce();
console.log(`Hello, ${name}!`)