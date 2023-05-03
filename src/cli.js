import readlineSync from "readline-sync";

const userName = () => {
  const name = readlineSync.question("May i have your name? ");
  if (name) {
    console.log(`Hello, ${name}!`);
  }
};

export default userName;
