import { INPUT_CHANGE } from "./actionTypes";

export const changeInputText = (text) => {
  return {
    type: INPUT_CHANGE,
    payload: text,
  };
};
