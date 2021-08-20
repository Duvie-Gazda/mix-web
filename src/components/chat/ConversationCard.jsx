import React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export const ConversationCard = () => {
  return (
    <Flex
      borderBottom={"1px"}
      borderBottomColor={"telegram.800"}
      backgroundColor={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("black", "white")}
      cursor={"pointer"}
      _hover={{
        color: "white",
        bgGradient: "linear(to-r, telegram.800, telegram.500)",
      }}
      my={2}
      px={4}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box py={3}>
        <Text fontFamily={"Roboto"} fontWeight={"bold"} fontSize={"20px"}>
          Hello
        </Text>
        <Text fontFamily={"Roboto"} fontSize={"16px"}>
          Hello
        </Text>
      </Box>
      <Text fontFamily={"Roboto"}>5 minutes ago</Text>
    </Flex>
  );
};
