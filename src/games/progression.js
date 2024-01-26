import runGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const discription = 'What number is missing in the progression?';

const getProgression = (size, startValue, progressionValue) => {
  const arr = [startValue];
  for (let j = 1; j < size; j += 1) {
    arr.push(arr[j - 1] + progressionValue);
  }
  return arr;
};

const getAnswerAndQuestion = () => {
  const minLengthProgression = 5;
  const sizeOfArray = minLengthProgression + getRandomNumber(0, 6);
  const missingElement = getRandomNumber(0, sizeOfArray);
  const startNumber = getRandomNumber(0, 100);
  const progressionMovement = getRandomNumber(0, 100);

  const array = getProgression(sizeOfArray, startNumber, progressionMovement);

  const question = array[missingElement].toString();
  array[missingElement] = '..';
  const answer = array.join(' ');

  return [answer, question];
};
    const brainProgression = () => {
    runGame(discription, getAnswerAndQuestion);
  };
  
  export default brainProgression;