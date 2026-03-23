const getQuestionAndAnswer = () => {
  const length = 10
  const start = Math.floor(Math.random() * 10) + 1
  const step = Math.floor(Math.random() * 10) + 1

  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }

  const hiddenIndex = Math.floor(Math.random() * length)
  const correctAnswer = String(progression[hiddenIndex])

  const questionParts = progression.map((num, index) => (
    index === hiddenIndex ? '..' : String(num)
  ))
  const question = questionParts.join(' ')

  return { question, answer: correctAnswer }
}

const description = 'What number is missing in the progression?'

export default { getQuestionAndAnswer, description }
