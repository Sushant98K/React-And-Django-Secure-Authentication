import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";

function Login() {
  return (
    <>
      <VStack>
        <div>
          <Center h='80vh'>
            <Box w='50vh' bg='gray.100' borderRadius='lg' p={5}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input type="text" />
                <FormLabel>Password</FormLabel>
                <Input type="password" />
                <Center>
                  <Button mt={4} colorScheme="blue" type="submit">
                    Log In
                  </Button>
                </Center>
              </FormControl>
            </Box>
          </Center>
        </div>
      </VStack>
    </>
  );
}
export default Login;
