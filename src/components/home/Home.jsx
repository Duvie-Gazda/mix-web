import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { ChatBox } from "../chat/ChatBox";
import { Header } from "./Header";

export const Home = () => {
  let token = useSelector((state) => state.account.token);

  if (!token) {
    token = sessionStorage.getItem("token") ?? null;
  }

  if (token) {
    return (
      <Grid w={"100%"} h={"100vh"} gridTemplateRows={"auto 1fr"}>
        <GridItem colSpan={2}>
          <Header />
        </GridItem>
        <GridItem>
          <ChatBox />
        </GridItem>
      </Grid>
    );
  } else {
    return <Redirect to={"/login"} />;
  }
};
