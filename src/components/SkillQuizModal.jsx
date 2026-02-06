import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { skillQuizzes } from "../data/skillQuizData"

const SkillQuizModal = ({ skill, onClose }) => {
  const [difficulty, setDifficulty] = useState("easy")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showResult, setShowResult] = useState(false)

  if (!skill) return null

  // Filter & limit to 5 questions
  const questions = skillQuizzes
    .filter(q => q.skill === skill && q.difficulty === difficulty)
    .slice(0, 5)

  const question = questions[currentQuestion]

  const handleAnswer = (option) => {
    if (answered) return

    setSelectedOption(option)
    setAnswered(true)

    if (option === question.answer) {
      setScore(prev => prev + 1)
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1)
        setAnswered(false)
        setSelectedOption(null)
      } else {
        setShowResult(true)
      }
    }, 900)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setAnswered(false)
    setSelectedOption(null)
    setShowResult(false)
  }

  return (
    <section className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 
                   rounded-2xl max-w-2xl w-full p-6 text-white relative"
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">
          😄 Test your {skill} skills
        </h2>

        {/* Score */}
        <div className="mb-4 text-sm text-blue-300">
          Score: {score} / 5
        </div>

        {/* Difficulty buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => { setDifficulty("easy"); resetQuiz() }}
            className="px-4 py-1 rounded-full bg-green-400/20 text-green-300"
          >
            Easy
          </button>
          <button
            onClick={() => { setDifficulty("medium"); resetQuiz() }}
            className="px-4 py-1 rounded-full bg-yellow-400/20 text-yellow-300"
          >
            Medium
          </button>
          <button
            onClick={() => { setDifficulty("hard"); resetQuiz() }}
            className="px-4 py-1 rounded-full bg-red-400/20 text-red-300"
          >
            Hard
          </button>
        </div>

        {/* Question */}
        {!showResult && (
          <>
            <p className="font-semibold mb-3">
              Q{currentQuestion + 1}. {question.question}
            </p>

            {question.type === "code" && (
              <pre className="bg-black p-3 rounded-lg text-sm mb-4 overflow-x-auto">
                <code>{question.code}</code>
              </pre>
            )}

            <div className="grid gap-2">
              {question.options.map((opt, i) => {
                const isCorrect = opt === question.answer
                const isSelected = opt === selectedOption

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    className={`
                      px-4 py-2 rounded-lg border
                      ${answered && isCorrect ? "bg-green-500/30 border-green-400" : ""}
                      ${answered && isSelected && !isCorrect ? "bg-red-500/30 border-red-400" : ""}
                      ${!answered ? "hover:bg-white/10 border-white/20" : ""}
                    `}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-5">
              {questions.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full 
                    ${i === currentQuestion ? "bg-blue-400" : "bg-gray-500"}
                  `}
                />
              ))}
            </div>
          </>
        )}

        {/* Result */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-10"
            >
              <h3 className="text-2xl font-bold mb-3">
                {score === 5
                  ? "🔥 You’re a Wizard!"
                  : score >= 3
                  ? "😎 Pretty Solid!"
                  : "😂 Time to Revise!"}
              </h3>

              <p className="mb-6">
                You scored {score} / 5
              </p>

              <button
                onClick={resetQuiz}
                className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default SkillQuizModal
