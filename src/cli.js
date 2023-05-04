import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May i have your name? ');
  return `Hello, ${name}!`;
};

export default userName;
