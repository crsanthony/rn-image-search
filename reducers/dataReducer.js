import { RETRIEVING_IMAGES, RETRIEVING_IMAGES_SUCCESS, RETRIEVING_IMAGES_ERROR } from '../constants';

const initialState = {
  images: [],
  retrieving: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case RETRIEVING_IMAGES:
      return {
        ...state,
        images: [],
        retrieving: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        retrieving: false,
        data: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        retrieving: false,
        error: true
      }
    default:
      return state
  }
}
