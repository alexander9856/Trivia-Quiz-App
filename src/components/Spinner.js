import { Spinner as ChakraSpinner, Box } from '@chakra-ui/react'

const Spinner = () => {
  return (
    <Box width="100%" h="100vh" display="flex" alignItems="center" justifyContent="center">
      <ChakraSpinner size="xl" thickness="4px" alignItems="center" color='teal' />
    </Box>
  )
}

export default Spinner