const initState = {
  orders: [],
  order: {},
  loading: false,
  errors: null,
}

const orderUserReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_USER_ORDER_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_USER_ORDER_DONE':
      return {
        ...state,
        pictures: action.payload,
        loading: false
      }
    case 'FETCH_USER_ORDER_ERROR':
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    default:
      return state;
  };
}

export default orderUserReducer