"use client";

import { useRouter } from "next/navigation";
import { Providers } from "./providers";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "./theme";

export default function Page({ children, cookies }: any) {
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (!token) router.push("/auth");

  return (
    <>
      <Providers cookies={cookies}>
        <h1>Page</h1>

        {children}
      </Providers>
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
      ></ColorModeScript>
    </>
  );
}
