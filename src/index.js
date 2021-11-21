import readlineSync from 'readline-sync';
import { REPIT_ROUNDS } from './const.js';

const newGame = (gameTask, gameQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTask);

  for (let i = 0; i < REPIT_ROUNDS; i += 1) {
    const [question, resultOperation] = gameQuestionAnswer();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer !== resultOperation) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${resultOperation}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${name}!`);
};

export default newGame;
