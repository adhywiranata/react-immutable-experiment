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
  ],
});

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_POST': return state;
    default: return state;
  }
};