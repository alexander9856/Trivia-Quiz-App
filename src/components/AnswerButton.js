import { Button, GridItem } from '@chakra-ui/react';
import { useContext } from 'react';
import { QuizContext } from '../contexts/QuestionsProvider';
export const AnswerButton = ({ text, questionNumber }) => {
    const { clickedAnswers, updateClickedAnswers } = useContext(QuizContext);
    
    const question = clickedAnswers.find((x) => x.questionNumber == questionNumber);
    const answer = question?.answer;

    return (
        <>
            <GridItem
                w={'100%'}
                textAlign={['center', 'center', 'inherit']}
            >
                <Button
                    w={['75vw', '80vw', '40vw', '30vw']}
                    p={5}
                    bg={text == answer ? 'teal' : 'rgb(237, 242, 247)'}
                    color={text === answer ? '#fff' : 'black'}
                    whiteSpace={'break-spaces'}
                    h={['9vh', '10vh', '9vh', '8vh']}
                    _hover={{ opacity: '70%' }}
                    onClick={() => updateClickedAnswers({ questionNumber, answer: text })}
                >
                    {text}
                </Button>
            </GridItem>
        </>
    );
};
