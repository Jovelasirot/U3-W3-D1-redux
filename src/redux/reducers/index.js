const initialState = {
  fav: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        fav: {
          ...state.fav,
          content: [...state.fav.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAV":
      return {
        ...state,
        fav: {
          ...state.fav,
          content: state.fav.content.filter((job, i) => i !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
