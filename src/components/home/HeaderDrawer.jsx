import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  List,
  ListItem,
  Text,
  Flex,
  Box,
  useColorMode,
  useColorModeValue,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { menu } from "../../data/menu";
import { IoMoon, IoSunny } from "react-icons/io5";
import { MdGroup } from "react-icons/md";
import { CreateGroup } from "../group/CreateGroup";

export const HeaderDrawer = ({ isOpenDrawer, onCloseDrawer }) => {
  let account = useSelector((state) => state.account);

  if (!account.nick) {
    account = JSON.parse(localStorage.getItem("account"));
  }

  const { colorMode, toggleColorMode } = useColorMode();

  const color = useColorModeValue("gray.200", "gray.900");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer isOpen={isOpenDrawer} placement="left" onClose={onCloseDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader ml={3}>{account.nick}</DrawerHeader>
          <Divider />
          <DrawerBody>
            <List>
              <ListItem
                key={10}
                rounded={"lg"}
                my={1}
                cursor={"pointer"}
                py={3}
                userSelect={"none"}
                _hover={{
                  bgColor: color,
                  shadow: "sm",
                }}
                onClick={onOpen}
              >
                <CreateGroup isOpen={isOpen} onClose={onClose} />
                <Flex px={3} alignItems={"center"}>
                  <Box display={"flex"} alignItems={"center"}>
                    <MdGroup size={"20px"} />
                    <Text ml={"2"}>'Hello'</Text>
                  </Box>
                </Flex>
              </ListItem>

              <ListItem
                key={10}
                rounded={"lg"}
                my={1}
                cursor={"pointer"}
                py={3}
                userSelect={"none"}
                _hover={{
                  bgColor: color,
                  shadow: "sm",
                }}
                onClick={onOpen}
              >
                <CreateGroup isOpen={isOpen} onClose={onClose} />
                <Flex px={3} alignItems={"center"}>
                  <Box display={"flex"} alignItems={"center"}>
                    <MdGroup size={"20px"} />
                    <Text ml={"2"}>'Hello'</Text>
                  </Box>
                </Flex>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
