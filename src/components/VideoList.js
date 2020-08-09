import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';

class VideoList extends Component {

  renderVideo = video => {
    return (
      <List animated verticalAlign='middle'>
        <List.Item>
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
          this.props.videos.map(video => this.renderVideo(video))
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    videos: state.searchVideoReducer.videos,
    isFetching: state.searchVideoReducer.isFetching,
    error: state.searchVideoReducer.error
  }
}

export default connect(mapStateToProps)(VideoList)