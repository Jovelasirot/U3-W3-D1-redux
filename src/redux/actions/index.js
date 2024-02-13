export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const RESET_FAV_LIST = "RESET_FAV_LIST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";
export const TURN_ON_LOADING = "TURN_ON_LOADING";
export const TURN_OFF_LOADING = "TURN_OFF_LOADING";

// ACTION CREATOR
export const addToFavAction = (data) => ({
  type: ADD_TO_FAV,
  payload: data,
});

export const removeFromFavAction = (i) => ({
  type: REMOVE_FROM_FAV,
  payload: i,
});

export const resetFavList = () => ({
  type: RESET_FAV_LIST,
});

export const fetchJobAction = (query) => {
  return async (dispatch, getState) => {
    dispatch({ type: TURN_ON_LOADING });
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: FETCH_JOBS_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type: FETCH_JOBS_FAILURE,
          payload: "Error fetching results",
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_JOBS_FAILURE,
        payload: error.message,
      });
    } finally {
      dispatch({ type: TURN_OFF_LOADING });
    }
  };
};
