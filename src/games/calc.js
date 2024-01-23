import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const discription = 'What is the result of the expression?';
const operator = ['+', '-', '*'];

const ExpressionResult = (num1, num2, getRandomExample) => {
let expression = 0;
switch (getRandomExample) {
  case '+':
    expression = num1 + num2;
    break;
  case '-':
    expression = num1 - num2;
    break;
  case '*':
    expression = num1 * num2;
    break;
  }
return expression;
};

const getAnswerAndQuestion = () => {
  const getRandomExample = operator[Math.floor(Math.random() * operator.length)];
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const question = `${num1} ${getRandomExample} ${num2}`;
  const rightAnswer = String(ExpressionResult(num1, num2, getRandomExample));
  return [question, rightAnswer];
};

const brainCalc = () => {
  runGame(discription, getAnswerAndQuestion);
};

export default brainCalc