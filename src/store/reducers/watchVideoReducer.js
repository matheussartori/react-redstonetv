const INITIAL_STATE = {
  video: {}
}

export default function watchVideo(state = INITIAL_STATE, action) {
  if (action.type === 'WATCH_VIDEO') {
    return {
      video: action.video
    }
  } else {
    return state
  }
}