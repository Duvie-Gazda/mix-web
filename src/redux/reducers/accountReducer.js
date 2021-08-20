const initState = {
  id: null,
  nick: null,
  token: null,
};
export const accountReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      sessionStorage.setItem("token", action.payload.token);
      localStorage.setItem(
        "account",
        JSON.stringify({ id: action.payload.id, nick: action.payload.nick })
      );

      return {
        ...state,
        ...action.payload,
      };

    case "REGISTER":
      return {
        ...state,
      };

    default:
      return state;
  }
};
