import readlineSync from 'readline-sync';

export const runGame = (game, name) => {
  console.log(game.description);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, answer } = game.getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

  