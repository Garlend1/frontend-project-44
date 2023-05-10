import getRandomNumber from '../getRandomNumber.js';
import brainGame from '../index.js';

const isPrime = (number) => {
  for (let a = 2; a < number; a += 1) {
    if (number % a === 0) {
      return false;
    }
  }
  return true;
};

const gameRound = () => {
  const randomNumber = getRandomNumber(50);
  const question = randomNumber;
  const correctAnswer = String(isPrime(randomNumber) ? 'yes' : 'no');
  return [question, correctAnswer];
};

const brainPrime = () => {
  const gameObjective = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  brainGame(gameObjective, gameRound);
};

export default brainPrime;
