import { Box, Text, Center, Heading, Grid } from '@chakra-ui/react';
import { decode } from 'he';
import { AnswerButton } from './AnswerButton';
import { useEffect, useState, useContext } from 'react';
import { QuizContext } from '../contexts/QuestionsProvider';
import { Navigate } from 'react-router-dom';
export const QuestionItem = ({ currentQuestionIndex }) => {
    const { quizData } = useContext(QuizContext);
    const [answers, setAnswers] = useState([]);

    const question = quizData[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;

    useEffect(() => {
        if (question) {
            const shuffledAnswers = [
                ...question?.incorrect_answers,
                question?.correct_answer,
            ].sort(() => 0.5 - Math.random());
            setAnswers(shuffledAnswers);
        }
    }, [question]);

    return (
        <>
            {question ? (
                <Center>
                    <Box h={"60vh"} maxW='80vw'>
                        <Heading sx={{ textAlign: 'center' }}>
                            Question {questionNumber} / {quizData?.length}
                        </Heading>
                        <Text
                            mb={30}
                            mt={8}
                            sx={{ textAlign: 'center' }}
                            fontSize={["xs", "small", "md"]}
                        >
                            Category: {decode(question?.category)}
                        </Text>
                        <Text
                            mb={30}
                            mt={8}
                            sx={{ textAlign: 'center' }}
                            fontSize={["sm", "md", "xl"]}
                            h='10vh'
                            maxH='20vh'
                            m={'10px auto'}
                        >
                            {decode(question?.question)}
                        </Text>

                        <Grid
                            templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
                            gap={3}
                            justifyContent={['center', 'space-evenly']}
                            justifyItems={'center'}
                            w={'100%'}
                            mt={'2rem'}
                            mx='auto'
                            maxW='50vw'
                        >
                            {answers?.map((x, index) => (
                                <AnswerButton
                                    text={decode(x)}
                                    key={index}
                                    questionNumber={questionNumber}
                                />
                            ))}
                        </Grid>
                    </Box>
                    <Box
                        sx={{ textAlign: 'center' }}
                        mt={50}
                        display={'flex'}
                        gap={10}
                        justifyContent={'center'}
                    ></Box>
                </Center>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
};
