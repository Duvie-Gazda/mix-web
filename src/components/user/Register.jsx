import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../utils/registerUser";
import { Link as RouterLink } from "react-router-dom";

export const Register = () => {
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const togglePassword = () => {
    setShow(!show);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await registerUser({ nick: nick, pass: password, dispatch: dispatch });
    history.push("/login");
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"100"}
      h={"100vh"}
      flexDirection={"column"}
    >
      <Heading
        fontSize={"45px"}
        color={"telegram.500"}
        mb={"4"}
        fontFamily={"Pacifico"}
      >
        MIX
      </Heading>

      <Text fontSize={"20px"} fontWeight={"bold"} fontFamily={"Roboto"}>
        Створити профіль
      </Text>

      <form onSubmit={handleRegister}>
        <FormControl mb={"3"}>
          <FormLabel fontFamily={"Roboto"}>Nick</FormLabel>
          <Input
            isRequired={true}
            colorScheme={"telegram"}
            type={"text"}
            autoComplete={"nickname"}
            value={nick}
            id={"nick"}
            placeholder={"Введіть nickname"}
            onChange={(e) => setNick(e.target.value)}
          />
        </FormControl>
        <FormControl mb={"3"}>
          <FormLabel fontFamily={"Roboto"}>Пароль</FormLabel>
          <InputGroup>
            <Input
              isRequired={true}
              colorScheme={"telegram"}
              type={show ? "text" : "password"}
              autoComplete={"off"}
              value={password}
              id={"password"}
              placeholder={"Введіть пароль"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement>
              <Button
                onClick={togglePassword}
                variant={"ghost"}
                _hover={{ outline: "none" }}
                _focus={{ outline: "none" }}
                _active={{ outline: "none" }}
              >
                <Icon as={show ? IoEyeOff : IoEye} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <Button
            mt={"2"}
            _active={{}}
            _hover={{}}
            color={"white"}
            bg={"telegram.500"}
            isFullWidth={"true"}
            type={"submit"}
          >
            Створити
          </Button>
        </FormControl>

        <Box textAlign={"center"} mt={"3"}>
          <Link
            colorScheme={"telegram"}
            color={"telegram.500"}
            _hover={{
              textDecoration: "none",
            }}
            _focus={{
              outline: "none",
            }}
            as={RouterLink}
            fontWeight={"700"}
            textAlign={"center"}
            to={"/login"}
          >
            Вже є профіль ?
          </Link>
        </Box>
      </form>
    </Flex>
  );
};
