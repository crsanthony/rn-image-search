mport { RETREIVING_IMAGES, RETRIEVING_IMAGES_SUCCESS, RETRIEVING_IMAGES_ERROR } from './constants'

export function getImages() {
  return {
    type: RETRIEVING_IMAGES
  }
}

export function getImagesSuccess(data) {
  return {
    type: RETRIEVING_IMAGES_SUCCESS,
    data,
  }
}

export function getImagesFailure() {
  return {
    type: RETRIEVING_IMAGES_SUCCESS
  }
}
