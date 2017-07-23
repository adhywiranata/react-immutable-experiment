const initialState = {
  isFetching: false,
  postsData: [
    {
      id: 1,
      title: 'Lorem Ipsum Dolor',
      description: 'dolor is a new lorem ipsum',
    },
  ],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_POST': return state;
    default: return state;
  }
};