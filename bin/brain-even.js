#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;
const generateRandomNumber = () => Math.round(Math.random() * 100);

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');

const startRound = () => {
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const randomNumber = generateRandomNumber();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${playerName}!`);
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
console.log(startRound());
