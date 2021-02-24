const initState = {
  reviews: [],
  isLoading: false,
  errors: null
};

const reviewReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true }
    case 'FETCH_REVIEW_FOR_ARTIST':
      return { ...state, isLoading: false, reviews: action.payload };
    default:
      return state;
  };
};

export default reviewReducer;