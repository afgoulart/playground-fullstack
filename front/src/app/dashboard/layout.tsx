import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";
import { ReactNode, Suspense } from "react";
import { IoPersonAddSharp } from "react-icons/io5";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Flex
      minHeight={"100vh"}
      alignContent={"stretch"}
      direction={"column"}
      justifyContent={"flex-start"}
      minWidth={"full"}
    >
      <Box bg={"white"} px={4}>
        <Header
          Links={[
            {
              label: "Add new Employee",
              link: "/employee/new",
              icon: IoPersonAddSharp,
            },
          ]}
        />
      </Box>
      <Flex
        flex={1}
        direction={"row"}
        minHeight={"full"}
        minWidth={"full"}
        gap={0}
      >
        <Suspense>
          <Sidebar />
        </Suspense>
        <Box flex={1}>{children}</Box>
      </Flex>
    </Flex>
  );
}
