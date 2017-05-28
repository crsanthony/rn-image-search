import { RETRIEVING_IMAGES, RETRIEVING_IMAGES_SUCCESS, RETRIEVING_IMAGES_ERROR } from '../constants';

const initialState = {
  keywords: null,
  results: null,
  status: 'waiting',
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case RETRIEVING_IMAGES:
      return {
        ...state,
        keywords: action.data,
        status: RETRIEVING_IMAGES
      }
    case RETRIEVING_IMAGES_SUCCESS:
      return {
        ...state,
        results: action.data,
        status: RETRIEVING_IMAGES_SUCCESS
      }
    case RETRIEVING_IMAGES_ERROR:
      return {
        ...state,
        retrieving: false,
        status: RETRIEVING_IMAGES_ERROR
      }
    default:
      return state
  }
}
