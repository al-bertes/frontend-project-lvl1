import readlineSync from 'readline-sync';

export const calcGame = (name) => {
    for (let i = 0; i < 3; i++) {
    console.log('What is the result of the expression?');
    const randomNumberFirst = Math.floor(Math.random() * 100);
    const randomNumberSecond = Math.floor(Math.random() * 100);
    const randomIndex = Math.floor(Math.random()*3);
    const operators = ['+', '-', '*'];

    const opreator = operators[randomIndex];

    console.log(`Question: ${randomNumberFirst} ${opreator} ${randomNumberSecond}`);

    const answerUsers = readlineSync.question('Your answer: ');

    let resultOperation = 0
    switch (opreator) {
        case '+':
            resultOperation = randomNumberFirst + randomNumberSecond;
            break;
        case '-':
            resultOperation = randomNumberFirst - randomNumberSecond;
            break;
        case '*':
            resultOperation = randomNumberFirst * randomNumberSecond;
            break;
    }

    let countCorrectResult = 0;
    if (resultOperation == answerUsers) {
        console.log('Correct!');
        countCorrectResult++;
    }else {
        console.log(`'${answerUsers}' is wrong answer ;(. Correct answer was '${resultOperation}'.
        Let's try again, ${name}!`);
    }
    (countCorrectResult===3) ? `Congratulations, ${name}!` : `Let's try again, ${name}!`
 }
}