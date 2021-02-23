const initState = {
  orders: [],
  order: {},
  loading: false,
  errors: null,
}

const orderUserReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_ORDER_USER_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_ORDER_USER_DONE':
      return {
        ...state,
        orders: action.payload,
        loading: false
      }
    case 'FETCH_ORDER_USER_ERROR':
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case 'CANCEL_ORDER_USER_START':
    return {
      ...state,
      loading: true
    }
    case 'CANCEL_ORDER_USER_DONE':
      return {
        ...state,
        loading: false
      }
    case 'CANCEL_ORDER_USER_ERROR':
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