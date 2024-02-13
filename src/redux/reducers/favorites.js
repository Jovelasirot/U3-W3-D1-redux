import { ADD_TO_FAV, REMOVE_FROM_FAV, RESET_FAV_LIST } from "../actions";

const initialState = {
  content: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_FAV:
      return {
        ...state,
        content: state.content.filter((job, i) => i !== action.payload),
      };

    case RESET_FAV_LIST:
      return { content: [] };

    default:
      return state;
  }
};

export default favReducer;
