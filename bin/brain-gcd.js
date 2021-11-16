#!/usr/bin/env node
import { gcdGenerate } from "../src/games/brain-gcd.js";
import readlineSync from 'readline-sync';
import {getName} from '../src/cli.js'

console.log('Welcome to the Brain Games!');

const nameUser = readlineSync.question('May I have your name? ');

getName(nameUser);

gcdGenerate(nameUser);