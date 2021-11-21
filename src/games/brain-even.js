import { generateRandomNumber } from '../utils.js';
import newGame from '../index.js';

const gameTask = 'What is the result of the expression?';

const gameQuestionAnswer = () => {
  const question = generateRandomNumber();
  let resultOperation;
  if (question % 2) {
    resultOperation = 'no';
  } else {
    resultOperation = 'yes';
  }
  return [question, resultOperation];
};
const checkByEvenNumber = () => newGame(gameTask, gameQuestionAnswer);
export default checkByEvenNumber;
