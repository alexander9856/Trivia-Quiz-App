import { useEffect } from 'react';
import SpinnerComponent from '../components/Spinner';
import { ResultsContainer } from '../components/ResultsContainer';
import { useContext } from 'react';
import { QuizContext } from '../contexts/QuestionsProvider';
import { useRouter } from '../hooks/useRouter'
const Results = () => {
    const { quizData } = useContext(QuizContext);
    const { navigation, navigate, Navigate } = useRouter();

    // if we want to click the browser Back button
    useEffect(() => {
        const handleBackButton = (e) => {
            e.preventDefault();
            navigate('/');
        };
        window.history.pushState(null, null, '/quiz/results');
        window.addEventListener('popstate', handleBackButton);
        return () => window.removeEventListener('popstate', handleBackButton)
    }, []);

    return (
        <>
            {navigation.state == 'loading' ?
                <SpinnerComponent />
                : quizData ? <ResultsContainer />
                    : <Navigate to="/" />
            }
        </>
    );
};

export default Results;
