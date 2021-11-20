import readlineSync from 'readline-sync';

const generateOperator = (operators, randomNumberFirst, randomNumberSecond) => {
  switch (operators) {
    case '+':
      return randomNumberFirst + randomNumberSecond;
    case '-':
      return randomNumberFirst - randomNumberSecond;
    case '*':
      return randomNumberFirst * randomNumberSecond;
    default:
      throw new Error(`operation ${operators} is not supported`);
  }
};

const calcGame = (name) => {
  let countCorrectResult = 0;
  for (let i = 0; i < 3; i += 1) {
    console.log('What is the result of the expression?');
    const randomNumberFirst = Math.floor(Math.random() * 100);
    const randomNumberSecond = Math.floor(Math.random() * 100);
    const randomIndex = Math.floor(Math.random() * 3);
    const operators = ['+', '-', '*'];

    const operator = operators[randomIndex];

    console.log(`Question: ${randomNumberFirst} ${operator} ${randomNumberSecond}`);

    const answerUsers = readlineSync.question('Your answer: ');

    const resultOperation = generateOperator(operator, randomNumberFirst, randomNumberSecond);
    if (resultOperation === +answerUsers) {
      console.log('Correct!');
      countCorrectResult += 1;
    } else {
      console.log(`Question: ${randomNumberFirst} ${operator} ${randomNumberSecond}`);
      console.log(`Your answer: ${answerUsers}`);
      console.log(`'${answerUsers}' is wrong answer ;(. Correct answer was '${resultOperation}'.
        Let's try again, ${name}!`);
      break;
    }
  }

  if (countCorrectResult === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default calcGame;
