import { getRandomInRange } from '../utils.js';
import playBrainGame from '../index.js';

const gameRound = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomInRange(0, 2)];
  const num1 = getRandomInRange(0, 10);
  const num2 = getRandomInRange(0, 10);
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
  const gameObjective = 'What is the result of the expression?';
  playBrainGame(gameObjective, gameRound);
};

export default playBrainCalc;
