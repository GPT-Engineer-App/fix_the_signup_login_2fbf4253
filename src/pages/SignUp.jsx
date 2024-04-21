import { Box, FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';

const SignUp = () => {
  return (
    <Box>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button size="lg" colorScheme="blue" w="full" mt={4} boxShadow="md">
        Sign Up
      </Button>
{/* Add SSO integration here */}
    </Box>
  );
};

export default SignUp;
