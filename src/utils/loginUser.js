import { loginAction } from "../redux/actions/accountActions";
import axios from "axios";

export const loginUser = async ({ nick, pass, dispatch }) => {
  const response = await axios.post("http://localhost:8000/users/auth", {
    nick,
    pass,
  });

  dispatch(
    loginAction({
      id: response.data.id,
      nick: response.data.nick,
      token: response.data.authToken,
    })
  );
};
