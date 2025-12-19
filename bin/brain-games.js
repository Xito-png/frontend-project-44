import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('brain-games');
  console.log('Welcome to the Brain Games!');
  
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default greetUser;

import greetUser from '../src/cli.js';

greetUser();

