"use client";

import {
  ChakraProvider,
  Container,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import { theme } from "../theme";

export function Providers({
  children,
  cookies,
}: {
  cookies: any;
  children: React.ReactNode;
}) {
  const colorModeManager = cookies
    ? cookieStorageManagerSSR(cookies)
    : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      <Container
        data-name="provider-container"
        minWidth="full"
        bg="gray.50"
        minHeight="100vh"
        px={0}
      >
        {children}
      </Container>
    </ChakraProvider>
  );
}
