import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Conversations } from "./Conversations";
import { ChatList } from "./ChatList";

export const ChatBox = () => {
  return (
    <Grid h={"full"} gridTemplateColumns={"0.5fr auto"}>
      <GridItem shadow={"md"}>
        <Conversations />
      </GridItem>
      <GridItem>
        <ChatList />
      </GridItem>
    </Grid>
  );
};
