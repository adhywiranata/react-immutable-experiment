import { fromJS } from 'immutable';

// using Map() from immutable on the initialState to make sure our state is immutable! 
const initialState = fromJS({
  isFetching: true,
  postsData: [],
});

const fetchPosts = (state) => {
  const fetchedPostsList = fromJS([
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
    {
      id: 3,
      title: 'Lorem Ipsum Dolor New Again',
      description: 'new dolor is a new lorem ipsum',
    }
  ]);

  // we're getting a new concatinated postData List
  const newPostsData = state.get('postsData').concat(fetchedPostsList);
  
  return state
  .set('postsData', newPostsData)
  .set('isFetching', false);
} 

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_POSTS': return fetchPosts(state);
    default: return state;
  }
};

export const getAllPosts = (state) => {
  // we're getting the posts List from immutable mapped state
  // to get the array, we can use toJS()
  return state.posts.get('postsData').toArray().map(mapObj => mapObj.toObject());
};

export const getPostFetchingStatus = (state) => {
  // we're getting the posts Map from immutable mapped state
  // to get the value a Map, we can use get()
  return state.posts.get('isFetching');
};