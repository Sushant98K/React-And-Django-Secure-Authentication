import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";

import {login} from '../endpoint/api'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(username, password)
  }

  return (
    <>
      <VStack>
        <Center h="80vh">
          <Box w="50vh" bg="gray.100" borderRadius="lg" p={5}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </FormControl>
              <Center>
                <Button mt={4} colorScheme="blue" onClick={handleLogin}>
                  Log In
                </Button>
              </Center>
          </Box>
        </Center>
      </VStack>
    </>
  );
}
export default Login;
