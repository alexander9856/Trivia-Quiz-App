import { Box, Text } from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { decode } from 'he';

export const ResultsItem = ({ item, clickedAnswers, index }) => {
    const answer = clickedAnswers?.find(x => x.questionNumber == index + 1)?.answer;
    const correctAnswer = item?.correct_answer;
    const isCorrect = answer == decode(correctAnswer);
    return (
        <>
            <Box mt={3}>
                <Text
                    fontSize={["14px","15px","16px","17px"]}
                    fontWeight="700"
                    color={isCorrect ? 'green.500' : 'red.500'}
                >
                    Question {index + 1}: {decode(item?.question)}
                </Text>
                <Text>
                    Your answer: {decode(answer || "")}{' '}
                    {!isCorrect ? (
                        <CloseIcon fontSize="0.6rem" color="red.500" />
                    ) : (
                        <CheckIcon fontSize="0.6rem" color="green.500" />
                    )}
                </Text>
                <Text
                    display="flex"
                    alignItems="center"
                    gap={2}
                    borderBottom="1px solid grey"
                    pb="6px"
                >
                    Correct answer: {decode(correctAnswer)}{' '}
                    <CheckIcon fontSize="0.6rem" color="green.500" />
                </Text>
            </Box>
        </>
    );
};
