import { Center, Button, Grid, GridItem, } from '@chakra-ui/react';
import { ArrowBackIcon, CheckIcon, RepeatIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useContext } from 'react';
import { QuizContext } from '../contexts/QuestionsProvider';
import { useRouter } from '../hooks/useRouter'
export const QuizNavigation = () => {
    const { quizData, clickedAnswers, setClickedAnswers } = useContext(QuizContext);
    const { navigate, params, location } = useRouter();

    const isFinished = clickedAnswers?.length === quizData?.length;

    const resultPage = location.pathname === '/quiz/results';

    return (
        <>
            {params && (
                <>
                    <Grid
                        templateColumns={`repeat(${quizData?.length < 10 ? quizData?.length : 10}, 1fr)`}
                        gap={2}
                        w="fit-content"
                        m={'0 auto'}
                        justifyContent='center'
                        textAlign='center'
                        alignItems='center'
                        mb={10}
                        mt={['150px', '185px', '0px']}

                    >
                        {quizData?.map((x, index) => {
                            const isAnswered = clickedAnswers?.find((answer) => answer?.questionNumber == index + 1);
                            return (
                                <GridItem
                                    key={index}
                                    w={['6vw', "5vw", "2.5vw", "2vw"]}
                                    _hover={{ opacity: '70%' }}
                                    backgroundColor={isAnswered ? 'teal' : params == index + 1 ? 'gray.300' : 'white'
                                    }
                                    color={isAnswered ? 'white' : 'black'}
                                    borderRadius={5}
                                    cursor={'pointer'}
                                    border={'1px solid grey'}
                                    onClick={() => navigate(`/quiz/${index + 1}`)}
                                >
                                    {index + 1}
                                </GridItem>
                            );
                        })}
                    </Grid>
                    <Center display="flex" gap={'5'} mb='2rem'>
                        {params == 1 ? (
                            <Button
                                as={RouterLink}
                                to="/"
                                w={'10vw'}
                                paddingInline={10}
                                textAlign={'center'}
                                leftIcon={<ArrowBackIcon boxSize={5} mr={1} />}
                            >
                                Back
                            </Button>
                        ) : (
                            <Button
                                w={'10vw'}
                                as={RouterLink}
                                to={`/quiz/${Number(params) - 1}`}
                                paddingInline={10}
                            >
                                Previous
                            </Button>
                        )}
                        {clickedAnswers?.length == quizData?.length ? (
                            <Button
                                isDisabled={!isFinished}
                                w={'10vw'}
                                as={RouterLink}
                                to="/quiz/results"
                                paddingInline={10}
                                rightIcon={<CheckIcon color={'blue'} />}
                            >
                                Finish
                            </Button>
                        ) : (
                            params != quizData?.length && (
                                <Button
                                    w={'10vw'}
                                    as={RouterLink}
                                    to={`/quiz/${Number(params) + 1}`}
                                    paddingInline={10}
                                >
                                    Next
                                </Button>
                            )
                        )}
                    </Center>
                </>
            )}
            
            {resultPage && (
                <Center
                    mb="2rem"
                    gap={5}
                >
                    <Button
                        leftIcon={<ArrowBackIcon />}
                        as={RouterLink}
                        to="/"
                        p="22x 18px"
                    >
                        New Quiz
                    </Button>
                    <Button
                        onClick={() => {
                            setClickedAnswers([])
                            return navigate('/quiz/1')
                        }}
                        rightIcon={<RepeatIcon />}
                    >
                        Retry
                    </Button>
                </Center>
            )}
        </>
    );
};
