import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { QuizContext } from '../contexts/QuestionsProvider';
import { timerCalculator } from '../helpers/timerCalculator';
import { useNavigate } from 'react-router-dom'
export const Timer = () => {
    const { setTimeLeft, quizData } = useContext(QuizContext);
    const duration = quizData?.length * 60;

    const [time, setTime] = useState(duration);

    const timeId = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeLeft(time);

        if (time == 0) {
            return navigate('/quiz/results')
        }

        timeId.current = setInterval(() => {
            setTime(prev => prev - 1);
        }, 1000)

        return () => clearInterval(timeId.current);
    }, [time]);

    const percentage = time / duration * 100;

    return (
        <CircularProgress
            mt='2rem'
            mb='1rem'
            display='flex'
            justifyContent='center'
            value={percentage}
            size={70}
            color={percentage < 10 ? 'red' : 'black'}
        >
            <CircularProgressLabel>{timerCalculator(time)}</CircularProgressLabel>
        </CircularProgress >
    )
}
