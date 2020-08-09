import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Advertisement, Embed } from 'semantic-ui-react'

class VideoPlayer extends Component {
  render() {
    return (
      <div className='video-player'>
        {
          !this.props.video.id && (
            <Advertisement className='watch-video' unit='top banner' test='Choose an video' />
          )
        }
        {
          this.props.video.id && (
            <div>
              <Embed id={this.props.video.id.videoId} source='youtube' placeholder='https://i.pinimg.com/originals/a2/81/38/a28138c18f0e24e9bab084aaa97770be.jpg' />
              <p className='video-title'>{this.props.video.snippet.title}</p>
              <p className='video-description'>{this.props.video.snippet.description}</p>
            </div>
          )
        }
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