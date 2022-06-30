import axios from "axios";
import {
  GET_IMAGES,
  LOAD_MORE,
  IMAGES_LOADING,
  IMAGES_LOADING_MORE,
} from "./types";
import { incrementPage, updateQuery } from "./searchbarActions";

const { REACT_APP_UNSPLASH_ID } = process.env;

export const getImages = (new_query) => (dispatch, getState) => {
  dispatch(updateQuery(new_query));
  dispatch(setImagesLoading());
  const { query, per_page } = getState().search;
  axios
    .get(
      `https://api.unsplash.com/search/photos/?page=1&per_page=${per_page}&query=${query}&client_id=${REACT_APP_UNSPLASH_ID}`
    )
    .then((res) => {
      dispatch({
        type: GET_IMAGES,
        payload: res.data,
      });
    })
    .catch((err) =>
      console.log(
        "Error happened during fetching!",
        err.response.data,
        err.response.status
      )
    );
};

export const loadMore = () => (dispatch, getState) => {
  dispatch(incrementPage());
  dispatch(setImagesLoadingMore());
  const { page_num, query, per_page } = getState().search;
  axios
    .get(
      `https://api.unsplash.com/search/photos/?page=${page_num}&per_page=${per_page}&query=${query}&client_id=${REACT_APP_UNSPLASH_ID}`
    )
    .then((res) => {
      dispatch({
        type: LOAD_MORE,
        payload: res.data,
      });
    })
    .catch((err) =>
      console.log(
        "Error happened during fetching!",
        err.response.data,
        err.response.status
      )
    );
};

export const setImagesLoading = () => {
  return { type: IMAGES_LOADING };
};

export const setImagesLoadingMore = () => {
  return { type: IMAGES_LOADING_MORE };
};
