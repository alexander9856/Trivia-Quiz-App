import { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [quizData, setQuizData] = useState(null);
    const [clickedAnswers, setClickedAnswers] = useState([]);
    const [timeLeft, setTimeLeft] = useState(0);
    
    const updateClickedAnswers = (data) => {
        setClickedAnswers(state => {
            const index = state.findIndex((x) => x.questionNumber === data.questionNumber);
            index !== -1 ? state[index] = data : state.push(data)
            return [...state];
        });
    };

    const contextValues = {
        quizData,
        setQuizData,
        clickedAnswers,
        updateClickedAnswers,
        setClickedAnswers,
        timeLeft,
        setTimeLeft
    };

    return (
        <QuizContext.Provider value={contextValues}>
            {children}
        </QuizContext.Provider>
    );
};
