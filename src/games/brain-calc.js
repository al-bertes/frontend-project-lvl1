import { generateOperator, generateRandomNumber } from '../utils.js';
import { OPERATORS } from '../const.js';
import newGame from '../index.js';

const gameTask = 'What is the result of the expression?';

const gameQuestionAnswer = () => {
  const randomNumberFirst = generateRandomNumber();
  const randomNumberSecond = generateRandomNumber();
  const randomIndex = generateRandomNumber(2);
  const operator = OPERATORS[randomIndex];
  const question = `${randomNumberFirst} ${operator} ${randomNumberSecond}`;
  const resultOperation = String(generateOperator(operator, randomNumberFirst, randomNumberSecond));

  return [question, resultOperation];
};

const calcGame = () => newGame(gameTask, gameQuestionAnswer);

export default calcGame;
