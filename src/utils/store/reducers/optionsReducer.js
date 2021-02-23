const initState = {
  options: [],
  loading: false,
  errors: null,
  totalExtraPrice: 0,
  selectedOptions: [],
  selfOptions: []
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
    case 'ADD_OPTION':
      return {
        ...state,
        selfOptions: [...state.selfOptions, action.payload]
      }
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_SELF_OPTION':
      return {
        ...state,
        selfOptions: action.payload,
        loading: false
      }
    case 'DELETE_SELF_OPTION':
      return {
        ...state,
        loading: false,
        selfOptions: state.selfOptions.filter(e => e.id !== action.payload)
      }
    default:
      return state;
  };
};

export default ordersReducer;