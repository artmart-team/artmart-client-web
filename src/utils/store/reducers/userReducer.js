const initState = {
  user: null,
  access_token: '',
  isLoading: false,
  errors: []
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REGISTER':
      return { ...state, user: action.payload, isLoading: false };
    case 'LOGIN':
      localStorage.setItem('access_token', action.payload);
      return { ...state, access_token: action.payload, isLoading: false };
    case 'LOGOUT':
      localStorage.removeItem('access_token');
      return { ...state, access_token: '' };
    case 'RESET_USER':
      return { ...state, user: null };
    case 'AUTHENTICATED':
      return { ...state, access_token: localStorage.getItem('accessToken') };
    case 'LOADING':
      return { ...state, isLoading: true };
    default:
      return state;
  };
};

export default userReducer;
