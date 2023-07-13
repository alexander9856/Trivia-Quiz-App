import { getCategories, getQuestions } from '../services/getData';
import { QuestionForm } from '../components/QuestionsForm';
import {json} from 'react-router-dom';
import { urlBuilder } from '../helpers/urlBuilder';
import Spinner from '../components/Spinner';
import { QuizContext } from '../contexts/QuestionsProvider';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from '../hooks/useRouter'

export const Home = () => {
    const { setClickedAnswers, setQuizData } = useContext(QuizContext);
    const { navigation, navigate, fetcher, loader: categories } = useRouter();
    
    const [alertMessage, setAlertMessage] = useState('');

    const { data } = fetcher;

    useEffect(() => {
        if (data) {
            setQuizData(data);
            data.length > 0 ? navigate('/quiz/1') : setAlertMessage('There were no results found with the given criteria.');
        }
        setClickedAnswers([]);
    }, [data]);

    return (
        <>
            {navigation.state === 'loading' || fetcher.state == 'submitting' ? (
                <Spinner />
            ) : (
                <>
                    <QuestionForm
                        categories={categories}
                        fetcher={fetcher}
                        alertMessage={alertMessage}
                    />
                </>
            )}
        </>
    );
};

export const loader = async () => {
    const res = await getCategories();
    if (!res.ok) {
        throw json({ message: 'Could not fetch data.' }, { status: 500 });
    } else {
        const data = await res.json();
        return data.trivia_categories;
    }
};

export const action = async ({ request }) => {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    const url = urlBuilder(formData);
    const res = await getQuestions(url);
    if (!res.ok) {
        throw json({ message: 'Could not fetch data.' }, { status: 500 });
    } else {
        const questions = await res.json();
        return questions.results;
    }
};
