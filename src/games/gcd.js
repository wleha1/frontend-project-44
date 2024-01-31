import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const discription = 'Find the greatest common divisor of given numbers.';

const getAnswerAndQuestion = () => {
  const num1 = getRandomNumber() + 1;
  const num2 = getRandomNumber() + 1;
  const question = `${num1} ${num2}`;
  let rightAnswer = '';
  for (let i = Math.min(num1, num2); i >= 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      rightAnswer = String(i);
      break;
    }
  }
  return [question, rightAnswer];
};

const brainGcd = () => {
  runGame(discription, getAnswerAndQuestion);
};

export default brainGcd;
