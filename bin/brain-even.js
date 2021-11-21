#!/usr/bin/env node
import readlineSync from 'readline-sync';
import checkByEvenNumber from '../src/games/brain-even.js';
import getName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const nameUser = readlineSync.question('May I have your name? ');
getName(nameUser);
checkByEvenNumber(nameUser);
