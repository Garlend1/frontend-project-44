import getRandomNumber from '../utils.js';
import playBrainGame from '../index.js';

const gameObjective = 'Find the greatest common divisor of given numbers.';

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
  const firstNumber = getRandomNumber(0, 9);
  const secondNumber = getRandomNumber(0, 9);
  const question = `${firstNumber} ${secondNumber}`;

  const correctAnswer = String(getDivisor(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const playBrainGcd = () => {
  playBrainGame(gameObjective, gameRound);
};

export default playBrainGcd;
