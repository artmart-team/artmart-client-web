const initState = {
  pictures: [],
  loading: false,
  errors: null
};

const picturesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_PICTURES_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_PICTURES_DONE':
      return {
        ...state,
        pictures: action.payload,
        loading: false
      }
    case 'FETCH_PICTURES_ERROR':
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    default:
      return state;
  };
};

export default picturesReducer;