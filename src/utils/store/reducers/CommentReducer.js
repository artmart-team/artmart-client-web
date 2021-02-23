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
      // for (let i = 0; i < state.comments.length; i++) {
      //   const e = state.comments[i];
      //   console.log(e.id, 'id', action.payload, 'ACTION')
      // if (e.id === action.payload) console.log('test') 
      // }
      // console.log(state.comments[0]);

      // console.log();

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
