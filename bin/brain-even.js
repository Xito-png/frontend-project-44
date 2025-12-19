#!/usr/bin/env node

import { welcome, getUserName } from '../src/cli.js';
import { askQuestion, showCorrect, showWrong, showGameOver } from '../src/game-utils.js';

/**
 * @param {number} num
 * @returns {boolean}
 */
const isEven = (num) => num % 2 === 0;

/**
 * @returns {number}
 */
const generateNumber = () => Math.floor(Math.random() * 100) + 1;

const runGame = async () => {
  welcome();
  const name = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  const roundsToWin = 3;
  let correctAnswers = 0;

  while (correctAnswers < roundsToWin) {
    const number = generateNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    const userAnswer = await askQuestion(`Is ${number} even? `);

    if (userAnswer.toLowerCase() === correctAnswer) {
      correctAnswers++;
      showCorrect();
      if (correctAnswers === roundsToWin) {
        console.log(`Congratulations, ${name}!`);
        return;
      }
    } else {
      showWrong(correctAnswer, userAnswer);
      showGameOver(name);
      return;
    }
  }
};

runGame().catch(console.error);
