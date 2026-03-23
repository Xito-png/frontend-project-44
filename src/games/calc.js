const operators = ['+', '-', '*']

const getQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 20)
  const num2 = Math.floor(Math.random() * 20)
  const operator = operators[Math.floor(Math.random() * operators.length)]

  const question = `${num1} ${operator} ${num2}`
  const answer = String(eval(question))

  return { question, answer }
}

const description = 'What is the result of the expression?'

export default { getQuestionAndAnswer, description }
