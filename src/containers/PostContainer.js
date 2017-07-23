import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllPosts, getPostFetchingStatus } from '../reducers/postReducer';

class PostContainer extends Component {
  render() {
    const { isFetching, posts } = this.props;
    return (
      <div>
        <h1>POSTS</h1>
        {isFetching ? <span>Loading...</span>: null}
        <ul>
          {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: getPostFetchingStatus(state),
    posts: getAllPosts(state),
  }
};

export default connect(
  mapStateToProps,
  null
)(PostContainer);