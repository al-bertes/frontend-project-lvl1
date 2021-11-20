import readlineSync from 'readline-sync';

const isNumberPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let d = 2; d < Math.sqrt(num); d++) {
    if (num % d === 0) {
      return false;
    }
  }
  return true;
};

export const brainPrimeGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let count = 0;
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 1000);
    console.log(`Question: ${randomNumber}`);
    const resultPrime = isNumberPrime(randomNumber);
    const userAnswer = readlineSync.question('Your answer: ');

    const userAnswerBool = (userAnswer === 'yes');

    if (resultPrime == userAnswerBool) {
      console.log('Correct!');
      count++;
    } else {
      console.log(
        `Question: ${randomNumber} Your answer: '${userAnswer}'n\ is wrong answer ;(. Correct answer was '${resultPrime}'.n\ Let's try again, ${name}!`,
      );
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`) 
  }
};
