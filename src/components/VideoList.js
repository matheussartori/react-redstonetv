import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react'

class VideoList extends Component {
  render() {
    return (
      <div className='video-list'>
        <List animated verticalAlign='middle'>
          <List.Item>
            <Image src='' avatar />
            <List.Content>
              <List.Header>Título</List.Header>
            </List.Content>
          </List.Item>
        </List>

        <List animated verticalAlign='middle'>
          <List.Item>
            <Image src='' avatar />
            <List.Content>
              <List.Header>Título</List.Header>
            </List.Content>
          </List.Item>
        </List>

        <List animated verticalAlign='middle'>
          <List.Item>
            <Image src='' avatar />
            <List.Content>
              <List.Header>Título</List.Header>
            </List.Content>
          </List.Item>
        </List>
      </div>
    )
  }
}

export default VideoList