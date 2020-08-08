const INITIAL_STATE = {
  videos: [],
  isFetching: false,
  error: false
}

export default function searchVideo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO_FETCH':
      return {
        videos: [],
        isFetching: true,
        error: false
      }
    case 'SEARCH_VIDEO_SUCCESS':
      return {
        videos: action.videos,
        isFetching: false,
        error: false
      }
    case 'SEARCH_VIDEO_ERROR':
      return {
        videos: [],
        isFetching: false,
        error: true
      }
    default: return state;
  }
}