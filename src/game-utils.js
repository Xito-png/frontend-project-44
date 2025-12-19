import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * @param {string} question
 * @returns {Promise<string>}
 */
export const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
};

export const showCorrect = () => {
  console.log('Correct!');
};

/**
 * @param {string} correctAnswer
 * @param {string} userAnswer
 */
export const showWrong = (correctAnswer, userAnswer) => {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
  );
};

/**
 * @param {string} name
 */
export const showGameOver = (name) => {
  console.log(`Let's try again, ${name}!`);
};
