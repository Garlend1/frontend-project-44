import getRandomNumber from '../getRandomNumber.js';
import isEven from '../isEven.js';
import brainGame from '../index.js';

const gameRound = () => {
  const randomNumber = getRandomNumber(50);
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEven = () => {
  const gameObjective = 'Answer "yes" if the number is even, otherwise answer "no"';
  brainGame(gameObjective, gameRound);
};

export default brainEven;
