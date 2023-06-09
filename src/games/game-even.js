import getRandomNumber from '../utils.js';
import playBrainGame from '../index.js';

const gameObjective = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const gameRound = () => {
  const randomNumber = getRandomNumber(0, 50);
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playBrainEven = () => {
  playBrainGame(gameObjective, gameRound);
};

export default playBrainEven;
