import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export default gcdGenerate = (name) => {
  for (let i = 0; i < 3; i++) {
    const randomNumberFirst = Math.floor(Math.random() * 100);
    const randomNumberSecond = Math.floor(Math.random() * 100);
    console.log('Find the greatest common divisor of given numbers.');
    console.log(`Question: ${randomNumberFirst} ${randomNumberSecond}`);
    const rirhtValue = gcd(randomNumberFirst, randomNumberSecond);
    const answerUsers = readlineSync.question('Your answer: ');

    let countCorrect = 0;
    if (rirhtValue == answerUsers) {
      console.log('Correct!');
      countCorrect++;
    } else {
      console.log(`Question: ${randomNumberFirst} ${randomNumberSecond}`);
      console.log(`Your answer: ${answerUsers}`);
      console.log(`'${answerUsers}' is wrong answer ;(. Correct answer was '${rirhtValue}'.
      Let's try again, ${name}!`);
      break;
    }

    (countCorrect === 3) ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
  }
};
