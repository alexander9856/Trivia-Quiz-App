import {
    Container,
    Heading,
    Text,
    Center,
    CircularProgress,
    CircularProgressLabel,
    Box,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { QuizContext } from '../contexts/QuestionsProvider';
import { resultsCalculator } from '../helpers/resultsCalculator';
import { ResultsItem } from '../components/ResultsItem';
import { timerCalculator } from '../helpers/timerCalculator';

export const ResultsContainer = () => {
    const { quizData, clickedAnswers, timeLeft } = useContext(QuizContext);
    const { counterCorrect, percentageOfCorrect } = resultsCalculator(quizData, clickedAnswers);
    
    return (
        <Center p={10}>
            <Container
                display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
            >
                <Heading>Results</Heading>
                <CircularProgress
                    mt="2rem"
                    size={100}
                    value={percentageOfCorrect}

                >
                    <CircularProgressLabel fontSize={'20px'}>
                        {counterCorrect} / {quizData?.length}
                    </CircularProgressLabel>
                </CircularProgress>
                <Text fontSize="xl" mt="1rem" textAlign={['center', 'center', 'inherit']}>
                    You got{' '}
                    <Text as="span" fontSize="1.5rem" color="blue">
                        {percentageOfCorrect}%{' '}
                    </Text>
                    of the answers correct.
                </Text>
                <Text textAlign='center'>
                    {timeLeft > 0 ? `Remaining time : ${timerCalculator(timeLeft)}` : 'Out of time!'}
                </Text>
                {percentageOfCorrect >= 50 && (
                    <Text fontSize="1.2rem" pt="1rem" pb="1rem">
                        Congratulations!
                    </Text>
                )}
                <Box
                    mt={5}
                    pb={3}
                    pl={3}
                    pr={3}
                    borderRadius="5px"
                    bgColor="gray.100"
                    w={['80vw', "80vw", "60vw", '55vw']}
                    px='5'
                >
                    {' '}
                    {quizData?.map((x, index) => (
                        <ResultsItem
                            key={index}
                            index={index}
                            item={x}
                            clickedAnswers={clickedAnswers}
                        />
                    ))}
                </Box>
            </Container>
        </Center>
    )
}