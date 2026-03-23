const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question: String(number),
    answer: correctAnswer
  };
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default { getQuestionAndAnswer, description };
