import gameEven from '../game-even.js';
import generateRandomNumber  from '../getRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;
const getQuestionAndAnswer = () => {
  const question = generateRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
    gameEven(rule, getQuestionAndAnswer);
};
