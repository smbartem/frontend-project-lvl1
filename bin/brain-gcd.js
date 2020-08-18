#!/usr/bin/env node
import engine from '../src/index.js';
import { gameFunctionGCD } from './brain-games.js';

const describtion = 'Find the greatest common divisor of given numbers.';
engine(describtion, gameFunctionGCD);
