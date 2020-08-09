import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { searchVideo } from '../store/actions/searchVideo';

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.props.searchVideo('Djent');
  }

  searchTerm = e => {
    if (e.keyCode === 13) {
      const term = e.target.value;
      this.props.searchVideo(term);
    }
  }

  render() {
    return (
      <div className='search-bar'>
        <Segment stacked>
          <Input
            onKeyDown={e => this.searchTerm(e)}
            icon='search'
            size='large'
            placeholder='Search...' />
        </Segment>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchVideo: term => dispatch(searchVideo(term))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)