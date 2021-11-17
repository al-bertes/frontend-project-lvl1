#!/usr/bin/env node
import { progressionNumber } from "../src/games/brain-progression.js";
import readlineSync from 'readline-sync';
import {getName} from '../src/cli.js'

console.log('Welcome to the Brain Games!');

const nameUser = readlineSync.question('May I have your name? ');

getName(nameUser);

progressionNumber(nameUser);