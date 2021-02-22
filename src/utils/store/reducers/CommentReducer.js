const initialState = {
  comments: [],
  comment: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {...state, comments: action.payload}
    default:
      return state
  }
}

export default reducer