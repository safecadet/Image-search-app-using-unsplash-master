import { UPDATE_QUERY, INCREMENT_PAGE } from "./types";

export const updateQuery = (query) => (dispatch) => {
  dispatch({
    type: UPDATE_QUERY,
    payload: query,
  });
};

export const incrementPage = () => {
  return { type: INCREMENT_PAGE };
};
