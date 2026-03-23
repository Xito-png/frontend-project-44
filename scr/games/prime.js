const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const getQuestionAndAnswer = () => {
    const number = Math.floor(Math.random() * 100) + 2;
    const answer = isPrime(number) ? 'yes' : 'no';
    return { question: number.toString(), answer };
  };
  
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  
  export default { getQuestionAndAnswer, description };
  