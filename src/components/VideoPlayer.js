import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Advertisement } from 'semantic-ui-react'

class VideoPlayer extends Component {
  render() {
    return (
      <div className='video-player'>
        <p>{JSON.stringify(this.props)}</p>
        <Advertisement className='watch-video' unit='top banner' test='Choose an video' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    video: state.watchVideoReducer.video
  }
}

export default connect(mapStateToProps)(VideoPlayer)