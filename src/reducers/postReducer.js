import { Map } from 'immutable';

// using Map() from immutable on the initialState to make sure our state is immutable! 
const initialState = Map({
  isFetching: false,
  postsData: [
    {
      id: 1,
      title: 'Lorem Ipsum Dolor',
      description: 'dolor is a new lorem ipsum',
    },
    {
      id: 2,
      title: 'Lorem Ipsum Dolor New',
      description: 'new dolor is a new lorem ipsum',
    },
  ],
});

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_POST': return state;
    default: return state;
  }
};

export const getAllPosts = (state) => {
  // we're getting the posts array from immutable mapped state
  return state.posts.get('postsData');
};

export const getPostFetchingStatus = (state) => {
  // we're getting the posts array from immutable mapped state
  return state.posts.get('isFetching');
};