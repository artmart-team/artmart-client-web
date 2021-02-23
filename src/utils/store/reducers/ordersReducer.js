const initState = {
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
    default:
      return state;
  };
};

export default ordersReducer;