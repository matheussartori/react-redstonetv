import React, { Component } from 'react';
import { List, Image, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux';

import { watchVideo } from '../store/actions/watchVideo'

class VideoList extends Component {

  renderVideo = video => {
    return (
      <List animated verticalAlign='middle' key={video.etag}>
        <List.Item onClick={() => this.props.watchVideo(video)}>
          <Image src={video.snippet.thumbnails.default.url} />
          <List.Content>
            <List.Header>{video.snippet.title}</List.Header>
          </List.Content>
        </List.Item>
      </List>
    )
  }

  render() {
    return (
      <div className='video-list'>
        {
          this.props.isFetching && (<Dimmer active inverted>
            <Loader size='medium'>Loading...</Loader>
          </Dimmer>)
        }
        {
          this.props.videos.map(video => this.renderVideo(video))
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    watchVideo: video => dispatch(watchVideo(video))
  }
}

const mapStateToProps = state => {
  return {
    videos: state.searchVideoReducer.videos,
    isFetching: state.searchVideoReducer.isFetching,
    error: state.searchVideoReducer.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)