import getRandomNumber from '../getRandomNumber.js';
import brainGame from '../index.js';

const getDivisor = (firstNum, secondNum) => {
  let a = firstNum;
  let b = secondNum;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const gameRound = () => {
  const firstNumber = getRandomNumber(9);
  const secondNumber = getRandomNumber(9);
  const question = `${firstNumber} ${secondNumber}`;

  const correctAnswer = getDivisor(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

const brainGcd = () => {
  const gameObjective = 'Find the greatest common divisor of given numbers.';
  brainGame(gameObjective, gameRound);
};

export default brainGcd;
