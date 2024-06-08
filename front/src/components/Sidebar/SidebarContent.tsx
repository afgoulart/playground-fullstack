import { Box, BoxProps, CloseButton, Flex, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";
import { NavItem } from "./NavItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href?: string;
  onClick?: Function;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, href: "/dashboard" },
  // { name: "Trending", icon: BsPeopleFill, href: "/employed" },
  // { name: "Explore", icon: FiCompass },
  // { name: "Favourites", icon: FiStar },
  // { name: "Settings", icon: FiSettings },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export function SidebarContent({ onClose, ...rest }: SidebarProps) {
  return (
    <Box
      bg={"white"}
      borderRight="1px"
      borderRightColor={"gray.200"}
      w={{ base: "full", md: 60 }}
      h="full"
      {...rest}
    >
      {LinkItems.map((link) => {
        const props: any = {};
        if (!link.href) props.href = link.href;
        if (!link.onClick) props.onClick = link.onClick;
        return (
          <NavItem key={link.name} {...props} icon={link.icon}>
            {link.name}
          </NavItem>
        );
      })}
    </Box>
  );
}
