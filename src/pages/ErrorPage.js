import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import {
    Box,
    Heading,
    Text,
    Link as ChakraLink,
    Button,
    Center,
} from '@chakra-ui/react';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <Center h='80vh' >
            <Box id="error-page" textAlign="center" backgroundColor='teal.400' padding="20"
                borderRadius='10px' color='#fff'>
                <Heading as="h1" fontSize="2xl" mb={4}>
                    Oops!
                </Heading>
                <Text fontSize="lg" mb={4}>
                    Sorry, an unexpected error has occurred.
                </Text>
                <Text fontStyle="italic" mb={4}>
                    {error.statusText || error.message}
                </Text>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                >
                    {error.message !== 'Failed to fetch' ?
                        <ChakraLink as={Link} to={'/'} color="white" textDecoration='underline' _hover={{ opacity: "80%" }}>
                            Go back home
                        </ChakraLink>
                        : <Button
                            m={'30px auto 0 auto'}
                            w={'fit-content'}
                            onClick={() => window.location.reload(false)}
                        >
                            Reload
                        </Button>}
                </Box>
            </Box>
        </Center>
    );
};

export default ErrorPage;
