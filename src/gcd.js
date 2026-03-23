const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const getQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  return { question, answer };
};

const description = 'Find the greatest common divisor of given numbers.';

export default { getQuestionAndAnswer, description };
