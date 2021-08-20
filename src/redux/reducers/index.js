import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { conversationReducer } from "./conversationReducer";

export const rootReducer = combineReducers({
  account: accountReducer,
  conversations: conversationReducer,
});
