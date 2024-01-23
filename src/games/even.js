import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const discription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getAnswerAndQuestion = () => {
  const question = getRandomNumber(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const brainEven = () => {
  runGame(discription, getAnswerAndQuestion);
};

export default brainEven;
