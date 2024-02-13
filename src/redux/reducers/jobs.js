import {
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  TURN_OFF_LOADING,
  TURN_ON_LOADING,
} from "../actions";

const initialState = {
  results: [],
  error: null,
  loading: false,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        results: action.payload,
        error: null,
      };

    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case TURN_ON_LOADING:
      return {
        ...state,
        loading: true,
      };

    case TURN_OFF_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default jobsReducer;
