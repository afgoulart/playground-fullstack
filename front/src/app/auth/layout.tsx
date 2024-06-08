import { Flex } from "@chakra-ui/react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} padding={0}>
      {children}
    </Flex>
  );
};

export default AuthLayout;
