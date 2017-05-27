import { RETRIEVING_IMAGES, RETRIEVING_IMAGES_SUCCESS, RETRIEVING_IMAGES_ERROR } from './constants'
import getImages from './api';

export function requestImages() {
  return {
    type: RETRIEVING_IMAGES
  }
}

export function requestImagesSuccess(data) {
  return {
    type: RETRIEVING_IMAGES_SUCCESS,
    data,
  }
}

export function requestImagesFailure(err) {
  return {
    type: RETRIEVING_IMAGES_SUCCESS,
    err
  }
}

export function fetchImages(keywords) {
  return (dispatch) => {
    dispatch(requestImages())
    getImages(keywords)
      .then((data) => {
        dispatch(requestImagesSuccess(data))
      })
      .catch((err) => dispatch(requestImagesFailure(err)))
  }
}
