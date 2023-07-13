import { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../contexts/QuestionsProvider';
import { QuestionItem } from '../components/QuestionItem';
import SpinnerComponent from '../components/Spinner';
import { Timer } from '../components/Timer';
import { useRouter } from '../hooks/useRouter'
export const Quiz = () => {
    const { quizData } = useContext(QuizContext);
    const { params, navigation, Navigate } = useRouter();
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    useEffect(() => {
        setCurrentQuestionIndex(params - 1);
    }, [params]);

    return (
        <>
            {navigation.state === 'loading' ? (
                <SpinnerComponent />
            ) : quizData ? (
                <>
                    <Timer />
                    <QuestionItem currentQuestionIndex={currentQuestionIndex} />
                </>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
};
