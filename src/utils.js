export const getRandomNumber = (number) => {
  const randomNumber = Math.round(Math.random() * number);
  return randomNumber;
};

export const getRandomInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
