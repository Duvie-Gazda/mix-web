export const loginAction = ({ id, nick, token }) => {
  return {
    type: "LOGIN",
    payload: {
      id,
      nick,
      token,
    },
  };
};

export const registerAction = () => {
  return {
    type: "REGISTER",
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};
