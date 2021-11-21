import { generateGcdNumber, generateRandomNumber } from '../utils.js';
import newGame from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';
const gameQuestionAnswer = () => {
  const randomNumberFirst = generateRandomNumber();
  const randomNumberSecond = generateRandomNumber();
  const question = `${randomNumberFirst} ${randomNumberSecond}`;
  const resultOperation = generateGcdNumber(randomNumberFirst, randomNumberSecond);

  return [question, resultOperation];
};

const gcdGenerate = () => newGame(gameTask, gameQuestionAnswer);
export default gcdGenerate;
