import Swal from 'sweetalert2';

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

      // console.log(state.artistOrders, 'ORD<<<');
      // console.log(action.orderId, '<<PRDER')
      return {
        ...state,
        artistOrders: state.artistOrders.filter(e => e.id !== action.orderId),
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
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      })

      Toast.fire({
        icon: 'success',
        title: 'Order Accepted!'
      })

      return {
        ...state,
        loading: false
      }
    case 'ACCEPT_ORDER_ERROR':
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case 'SUBMIT_COMMISSION':
      const Toast1 = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      })

      Toast1.fire({
        icon: 'success',
        title: 'Order has been submitted!'
      })

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