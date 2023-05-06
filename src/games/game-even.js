import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import isEven from '../isEven.js';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');

const brainEven = () => {
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const randomNumber = getRandomNumber();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default brainEven;
