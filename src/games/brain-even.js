import readlineSync from 'readline-sync';

const checkByEvenNumber = (name) => {
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;

    console.log(`Question: ${randomNumber}`);

    const answerUsers = readlineSync.question('Your answer: ');

    if ((randomNumber % 2 === 0 && answerUsers === 'yes') || (randomNumber % 2 !== 0 && answerUsers === 'no')) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`"${answerUsers}" is wrong answer ;(. Correct answer was "${(answerUsers === 'yes') ? 'no' : 'yes'}".
          Let's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default checkByEvenNumber;
