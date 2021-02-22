const initState = {
  options: [],
  loading: false,
  errors: null,
  totalExtraPrice: 0,
  selectedOptions: []
};

const ordersReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_ARTIST_OPTION_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_ARTIST_OPTION_DONE':
      return {
        ...state,
        options: action.payload,
        loading: false
      }
    case 'FETCH_ARTIST_OPTION_ERROR':
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case 'UPDATE_EXTRA_PRICE_DONE':
      return {
        ...state,
        totalExtraPrice: action.payload
      }
    case 'UPDATE_EXTRA_PRICE_ERROR':
      return {
        ...state,
        errors: action.payload
      }
    case 'SELECTED_OPTIONS_DONE':
      return {
        ...state,
        selectedOptions: action.payload
      }
    case 'SELECTED_OPTIONS_ERROR':
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state;
  };
};

export default ordersReducer;