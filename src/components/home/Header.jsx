import { Flex, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { HeaderDrawer } from "./HeaderDrawer";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      px={4}
      py={3}
      shadow={"md"}
      bgColor={useColorModeValue("white", "gray.800")}
    >
      <IoMenu size={"30px"} onClick={onOpen} cursor={"pointer"} />

      <HeaderDrawer isOpenDrawer={isOpen} onCloseDrawer={onClose} />
    </Flex>
  );
};
