import readlineSync from 'readline-sync';

export const progressionNumber = (name) => {
    let countCorrect = 0;
    for ( let i = 0; i < 3; i++ ) {
    console.log('What number is missing in the progression?');
    let randomNumber = Math.floor(Math.random() * 20);
    const stepProgress = Math.floor(Math.random() *(6 - 1) ) + 1;
    const lengtnArr = Math.floor(Math.random() * (12 - 5) ) + 5;
    const arrNumber = [];

    do {
        randomNumber = randomNumber + stepProgress;
        arrNumber.push(randomNumber);
        
    } while (arrNumber.length < lengtnArr);
    const replaceElement = Math.floor(Math.random() * (arrNumber.length - 1) ) + 1;
    const correctAnswer = arrNumber[replaceElement];
    arrNumber[replaceElement] = '..'
    const stringArr = arrNumber.join(', ');
    console.log(`Question: ${stringArr}`);
    const userAnswer = readlineSync.question('Your answer: ');


    if (userAnswer === String(correctAnswer)) {
        console.log('Correct!');
        countCorrect++;
    } else {
        console.log(
            `Question: ${stringArr}n\Your answer: ${userAnswer}n\'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.n\Let's try again, ${name}!`) 
    }
}
   (countCorrect===3) ? console.log(`Congratulation, ${name}`) :  console.log(`Let's try, again ${name}`)
}

