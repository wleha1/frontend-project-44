import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const discription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswerAndQuestion = () => {
  const num = getRandomNumber(2, 200);
  const question = `${num}`;

  const answerTrue = isPrime(num) ? 'yes' : 'no';

  return [question, answerTrue];
};

const brainPrime = () => {
  runGame(discription, getAnswerAndQuestion);
};

export default brainPrime;
