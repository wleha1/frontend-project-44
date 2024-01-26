import getRandomNumber from '../getRandomNumber.js';
import runGame from './index.js';

 
const discription = () => 'What number is missing in the progression?';

const generaionProgression = () => {
    const firstNum = Math.floor(Math.random * 50) 
    const step = Math.floor(Math.random * (5 - 1) + 1)
    const length = getRandomNumber(1, 10);
    const array = [];
        for (let i = 0; i <= length; i += 1) {
            array.push

        }
}

    const brainProgression = () => {
    runGame(discription, getAnswerAndQuestion);
  };
  
  export default brainProgression;