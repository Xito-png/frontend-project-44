const getQuestionAndAnswer = () => {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    return { question: number.toString(), answer: correctAnswer };
  };
  
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  
  export default { getQuestionAndAnswer, description };
  