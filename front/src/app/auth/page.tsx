import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

interface AuthPageProps {}

const AuthPage = ({}: AuthPageProps) => {
  const bg_content = "white";

  return (
    <Flex minW={"100%"} minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>RBR Digital - Manager</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Sign in to enjoy all of our cool{" "}
            <Link color={"blue.400"}>features</Link> &#9996;
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={bg_content} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color="white"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Login
              </Button>
              <Divider m="0" />
              <Link
                href="/auth/register"
                color={"blue.400"}
                padding={"10px"}
                borderRadius={8}
                textAlign="center"
                _hover={{
                  color: "black",
                  bg: "gray.100",
                }}
              >
                Sign in
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default AuthPage;
