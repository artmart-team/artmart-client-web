const initialState = {
  description: '',
  loading: false,
  errors: null
}

const commentReducer = (state = initialState, action) => {
// console.log("🚀 ~ file: CommentReducer.js ~ line 7 ~ reducer ~ action", action)
  switch (action.type) {
    case 'ADD_COMMENT_START':
      return {
        ...state, 
        loading: true
      }
    case 'ADD_COMMENT_DONE':
      return {
        ...state, 
        description: action.payload,
        loading: false
      }
    case 'ADD_COMMENT_ERROR':
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default commentReducer