const initState = {
  commission: {},
  loading: false,
  errors: [],
  title: '',
  description: '',
  price: '',
  totalPrice: ''
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