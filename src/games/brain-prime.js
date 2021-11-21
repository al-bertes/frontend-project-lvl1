import { generateRandomNumber, isNumberPrime } from '../utils.js';
import newGame from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameQuestionAnswer = () => {
  const question = generateRandomNumber(1000);
  const checkNum = isNumberPrime(question);
  const resultOperation = (checkNum) ? 'yes' : 'no';

  return [question, resultOperation];
};

const brainPrimeGame = () => newGame(gameTask, gameQuestionAnswer);
export default brainPrimeGame;
