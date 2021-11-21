import { generateRandomNumber } from '../utils.js';
import newGame from '../index.js';

const gameTask = 'What number is missing in the progression?';

const gameQuestionAnswer = () => {
  let randomNumber = generateRandomNumber(20);
  const stepProgress = generateRandomNumber(6);
  const lengtnArr = generateRandomNumber(12, 5);
  const arrNumber = [];

  do {
    randomNumber += stepProgress;
    arrNumber.push(randomNumber);
  } while (arrNumber.length < lengtnArr);
  const replaceElement = generateRandomNumber(arrNumber.length);
  const resultOperation = String(arrNumber[replaceElement]);
  arrNumber[replaceElement] = '..';
  const question = arrNumber.join(' ');

  return [question, resultOperation];
};

const progressionNumber = () => newGame(gameTask, gameQuestionAnswer);

export default progressionNumber;
