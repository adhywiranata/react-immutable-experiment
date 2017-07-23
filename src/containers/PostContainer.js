import React from 'react';
import { connect } from 'react-redux';

const PostContainer = ({ posts }) => (
  <div>
    <h1>POSTS</h1>
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  posts: [],
});

export default connect(
  mapStateToProps,
  null
)(PostContainer);