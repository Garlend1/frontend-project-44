import { getRandomInRange } from '../utils.js';
import playBrainGame from '../index.js';

const gameObjective = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let a = 2; a < number; a += 1) {
    if (number % a === 0) {
      return false;
    }
  }
  return true;
};

const gameRound = () => {
  const randomNumber = getRandomInRange(10, 50);
  const question = randomNumber;
  const correctAnswer = String(isPrime(randomNumber) ? 'yes' : 'no');
  return [question, correctAnswer];
};

const playBrainPrime = () => {
  playBrainGame(gameObjective, gameRound);
};

export default playBrainPrime;
