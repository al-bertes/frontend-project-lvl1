#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brainPrimeGame from '../src/games/brain-prime.js';
import { getName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const nameUser = readlineSync.question('May I have your name? ');

getName(nameUser);

brainPrimeGame(nameUser);
