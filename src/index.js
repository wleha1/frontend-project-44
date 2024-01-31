import readlineSync from 'readline-sync';

const count = 3;

const runGame = (discritption, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have you name? ');
  console.log(`${'Hello, '}${name}${'!'}`);
  console.log(discritption);

  for (let i = 0; i < count; i += 1) {
    const [question, rightAnswer] = gameFunction();
    console.log(`${'Question: '}${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== rightAnswer) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; 
    }
  }
  console.log(`${'Congratulations, '}${name}${'!'}`);
};

export default runGame;
