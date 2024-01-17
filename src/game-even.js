import readlineSync from 'readline-sync';

const roundsCount = 3;

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = greeting();
  console.log(rule);
  let round = 0;

  while (round < roundsCount) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is a wrong answer.\nCorrect answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    round += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};