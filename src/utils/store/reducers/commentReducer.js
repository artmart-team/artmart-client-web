const initState = {
  description: '',
  comments: [],
  loading: false,
  errors: null
}

const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      };
    case 'RESET_COMMENT':
      return {
        ...state,
        description: ''
      };
    case 'COMMENT_SUBMIT':

      return {
        ...state,
        loading: false,
        description: action.payload,
        comments: action.comments
      };
    case 'COMMENT_FETCH':
      return {
        ...state,
        loading: false,
        comments: action.payload
      };
    case 'COMMENT_DELETE':
      return {
        ...state,
        loading: false,
        comments: state.comments.filter(e => e.id !== action.payload)
      }
    default:
      return state;
  };
};

export default commentReducer
