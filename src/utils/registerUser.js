import { registerAction } from "../redux/actions/accountActions";
import axios from "axios";

export const registerUser = async ({ nick, pass, dispatch }) => {
  await axios.put("http://localhost:8000/users/new", {
    nick,
    pass,
  });
  dispatch(registerAction());
};
