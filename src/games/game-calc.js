import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}`);
const gameObjective = 'What is the result of the expression?';
console.log(gameObjective);

const gameRound = () => {

  const getRandom = (array) => Math.round(Math.random() * array.length);
  const operators = ['+', '-', '*'];

  const operator = getRandom(operators);
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);

  const question = readlineSync.question`${num1} ${operator} ${num2}`;
  console.log(question);

  let result = 0;
  switch (question) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = null;
  }
};

gameRound();

export default gameRound;
