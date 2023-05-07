import getRandomNumber from '../getRandomNumber.js';
import brainGame from '../index.js';

const gameRound = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(2)];
  const num1 = getRandomNumber(10);
  const num2 = getRandomNumber(10);
  const question =`${num1} ${randomOperator} ${num2}`;
  
  let correctAnswer;
    switch (randomOperator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        correctAnswer = 0;
    }
    return [question, correctAnswer]
  };



const gameCalc = () => {
  const gameObjective = 'What is the result of the expression?';
  brainGame(gameObjective, gameRound);
};

export default gameCalc;
