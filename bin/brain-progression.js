#!/usr/bin/env node
import engine from '../src/index.js';
import { gameFunctionProgression } from './brain-games.js';

const describtion = 'What number is missing in the progression?';
engine(describtion, gameFunctionProgression);
