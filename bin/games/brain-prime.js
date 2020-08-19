#!/usr/bin/env node
import engine from '../../src/index.js';
import { gameFunctionPrime } from '../brain-games.js';

const describtion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
engine(describtion, gameFunctionPrime);
