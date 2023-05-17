import getRandomNumber from '../utils.js';
import playBrainGame from '../index.js';

const gameObjective = 'What is the result of the expression?';

const gameRound = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, 3)];
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const question = `${num1} ${randomOperator} ${num2}`;

  let correctAnswer = 0;
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
      throw new Error(`Operator ${randomOperator} - is incorrect!`);
  }

  correctAnswer = String(correctAnswer);
  return [question, correctAnswer];
};

const playBrainCalc = () => {
  playBrainGame(gameObjective, gameRound);
};

export default playBrainCalc;
