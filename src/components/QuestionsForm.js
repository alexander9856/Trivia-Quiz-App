import {
    FormLabel,
    Heading,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    Box,
    Center,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export const QuestionForm = ({ categories, fetcher, alertMessage }) => {
    return (
        <Center h={['90vh','100vh','100vh']}>
            <Box w="60%" >
                <Heading mb={12} sx={{ textAlign: 'center' }}>
                    Trivia-Quiz
                </Heading>
                <fetcher.Form method="post">
                    {alertMessage && (
                        <Alert status="error" mb={3}>
                            <AlertIcon />
                            <AlertTitle>{alertMessage}</AlertTitle>
                        </Alert>
                    )}

                    <FormLabel >Number of Questions:</FormLabel>
                    <NumberInput
                        id="questionsNum"
                        name="questionsNum"
                        defaultValue={10}
                        min={1}
                        max={50}
                        mb={5}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>

                    <FormLabel mt={5}>Select category</FormLabel>
                    <Select
                        name="category"
                    >
                        <option value="any">Any category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </Select>

                    <FormLabel mt={5} >Difficulty</FormLabel>
                    <Select
                        name="difficulty"
                    >
                        <option value="any">Any difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </Select>

                    <FormLabel mt={5} >Type</FormLabel>
                    <Select name="type">
                        <option value="any">Any type</option>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True / False</option>
                    </Select>

                    <Center>
                        <Button
                            type="submit"
                            fontSize="18"
                            p="5"
                            w="200px"
                            mt={10}
                            rightIcon={<ArrowForwardIcon boxSize={7} />}
                            colorScheme="blue"
                            variant="outline"
                        >
                            Start quiz
                        </Button>
                    </Center>
                </fetcher.Form>
            </Box>
        </Center>
    );
};
