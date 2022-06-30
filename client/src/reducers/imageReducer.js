import {
  GET_IMAGES,
  LOAD_MORE,
  IMAGES_LOADING,
  IMAGES_LOADING_MORE,
} from "../actions/types";

const initialState = {
  loading: false,
  loading_more: false,
  display_images: false,
  images: [],
  total_results: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload.results,
        total_results: action.payload.total,
        loading: false,
        display_images: true,
      };
    case LOAD_MORE:
      const new_images = state.images.concat(action.payload.results);
      return {
        ...state,
        images: new_images,
        loading_more: false,
      };
    case IMAGES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case IMAGES_LOADING_MORE:
      return {
        ...state,
        loading_more: true,
      };
    default:
      return state;
  }
};
