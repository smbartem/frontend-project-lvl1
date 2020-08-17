#!/usr/bin/env node
import engine from '../src/index.js';
import { gameFunctionEven } from './brain-games.js';

const describtion = 'Answer "yes" if the number is even, otherwise answer "no".';
engine(describtion, gameFunctionEven);
