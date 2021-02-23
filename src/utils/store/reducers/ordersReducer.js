const initState = {
  commission: {},
  loading: false,
  errors: [],
  title: '',
  description: '',
  price: '',
  totalPrice: '',
  artistOrders: []
};

const ordersReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_ORDER_DETAILS_DONE':
      return {
        ...state,
        title: action.title,
        description: action.description
      }
    case 'UPDATE_ORDER_DETAILS_DONE':
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case 'FETCH_ORDER_BY_ARTIST_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_ORDER_BY_ARTIST_DONE':
      return {
        ...state,
        loading: false,
        artistOrders: action.payload
      }
    case 'FETCH_ORDER_BY_ARTIST_ERROR':
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case 'DECLINE_ORDER_START':
      return {
        ...state,
        loading: true
      }
    case 'DECLINE_ORDER_DONE':
      return {
        ...state,
        loading: false
      }
    case 'DECLINE_ORDER_ERROR':
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case 'ACCEPT_ORDER_START':
      return {
        ...state,
        loading: true
      }
    case 'ACCEPT_ORDER_DONE':
      return {
        ...state,
        loading: false
      }
    case 'ACCEPT_ORDER_ERROR':
      return {
        ...state,
        errors: action.payload,
        loading: false
    case 'SUBMIT_COMMISSION':
      return {
        ...state,
        commission: action.payload,
        loading: false
      }
    case 'RESET_SUBMIT':
      return {
        ...state,
        commission: {}

      }
    default:
      return state;
  };
};

export default ordersReducer;