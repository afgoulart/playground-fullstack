"use client";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton, HStack, Box, useDisclosure } from "@chakra-ui/react";
import { NavItem } from "../Sidebar/NavItem";
import { IconType } from "react-icons";

interface HeaderProps {
  Links: {
    label: string;
    link: string;
    icon: IconType;
  }[];
}

export function Header({ Links }: HeaderProps) {
  const { onClose, isOpen, onOpen } = useDisclosure();

  return (
    <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
      <IconButton
        size={"md"}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={isOpen ? onClose : onOpen}
      />
      <HStack spacing={8} alignItems={"center"}>
        <Box>Logo</Box>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((item, idx) => (
            <NavItem key={idx} href={item.link} icon={item.icon}>
              {item.label}
            </NavItem>
          ))}
        </HStack>
      </HStack>
    </Flex>
  );
}
