import { INPUT_CHANGE } from "./actionTypes";
import searchField from "./initialState";

const bookSearchReducer = (state = searchField, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, searchedText: action.payload };
    default:
      return state;
  }
};

export default bookSearchReducer;
