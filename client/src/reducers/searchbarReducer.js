import { UPDATE_QUERY, INCREMENT_PAGE } from "../actions/types";

const initialState = {
  query: "random",
  page_num: 1,
  per_page: 8,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_PAGE:
      return {
        ...state,
        page_num: state.page_num + 1,
      };
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload,
        page_num: 1,
      };
    default:
      return state;
  }
};
