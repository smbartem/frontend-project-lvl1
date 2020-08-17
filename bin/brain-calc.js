#!/usr/bin/env node
import engine from '../src/index.js';
import { gameFunctionCalc } from './brain-games.js';

const describtion = 'What is the result of the expression?';
engine(describtion, gameFunctionCalc);
