import { getRandomInRange } from '../utils.js';
import playBrainGame from '../index.js';

const gameObjective = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const gameRound = () => {
  const start = getRandomInRange(0, 20);
  const step = 2;
  const length = 10;
  const progression = getProgression(start, step, length);
  const hiddenNumberIndex = getRandomInRange(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenNumberIndex]);
  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const playBrainProgression = () => {
  playBrainGame(gameObjective, gameRound);
};

export default playBrainProgression;
