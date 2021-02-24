const initState = {
  user: null,
  otherUser: null,
  access_token: '',
  isLoading: false,
  errors: null,
  rating: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'RESET_RATING':
      return { ...state, rating: null };
    case 'GET_TOTAL_RATING':
      return { ...state, rating: action.payload, isLoading: false }
    case 'REGISTER':
      return { ...state, user: action.payload, isLoading: false };
    case 'LOGIN':
      localStorage.setItem('role', action.role)
      localStorage.setItem('id', action.id)
      localStorage.setItem('access_token', action.payload);
      return { ...state, access_token: action.payload, isLoading: false };
    case 'LOGOUT':
      localStorage.removeItem('access_token');
      localStorage.removeItem('id');
      localStorage.removeItem('role');
      return { ...state, access_token: '', user: null };
    case 'GET_USER_ID':
      return { ...state, user: action.payload, isLoading: false };
    case 'GET_OTHER_USER':
      return { ...state, otherUser: action.payload, isLoading: false };
    case 'RESET_USER':
      return { ...state, user: null };
    case 'RESET_OTHER_USER':
      return { ...state, otherUser: null };
    case 'AUTHENTICATED':
      return { ...state, access_token: localStorage.getItem('accessToken') };
    case "DONE_EDIT_PROFILE":
      return { ...state, otherUser: action.payload, isLoading: false }
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'ERROR':
      return { ...state, errors: action.payload, isLoading: false }
    default:
      return state;
  };
};

export default userReducer;
