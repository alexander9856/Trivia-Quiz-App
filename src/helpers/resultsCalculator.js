import { decode } from "he"

export const resultsCalculator = (quizData, clickedAnswers) => {
    let counterCorrect = 0
    
    quizData?.forEach((question, i) => {
        const clickedAnswer = clickedAnswers.find(
            (answer) => answer.questionNumber === i + 1
        )
        const result = clickedAnswer?.answer === decode(question.correct_answer)
        if (result) {
            counterCorrect++
        }
    })
    const percentageOfCorrect = Math.round((counterCorrect / quizData?.length) * 100)
    return { counterCorrect, percentageOfCorrect }
}
