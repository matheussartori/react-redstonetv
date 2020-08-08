import youtubeSearch from 'youtube-api-v3-search';
import YTApi from '../../api';

const API_KEY = YTApi;

export const searchVideoFetch = () => {
  return {
    type: 'SEARCH_VIDEO_FETCH',
    isFetching: true,
    error: false
  }
}

export const searchVideoSuccess = videos => {
  return {
    type: 'SEARCH_VIDEO_SUCCESS',
    videos,
    isFetching: false,
    error: false
  }
}

export const searchVideoError = () => {
  return {
    type: 'SEARCH_VIDEO_ERROR',
    isFetching: false,
    error: true
  }
}

export const searchVideo = term => {
  return dispatch => {
    dispatch(searchVideoFetch())
    youtubeSearch(API_KEY, {q: term})
      .then(data => dispatch(searchVideoSuccess(data.items)))
      .catch(() => dispatch(searchVideoError()))
  }
}