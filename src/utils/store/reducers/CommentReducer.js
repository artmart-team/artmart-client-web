const initState = {
  description: '',
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
      }
    case 'COMMENT_SUBMIT':
      return {
        ...state,
        loading: false,
        description: action.payload
      }
    default:
      return state;
  };
};

export default commentReducer
