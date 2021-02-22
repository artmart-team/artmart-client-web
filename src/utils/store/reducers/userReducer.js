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
    case 'RESET_USER':
      return { ...state, user: null };
    case 'LOADING':
      return { ...state, isLoading: true };
    default:
      return state;
  };
};

export default userReducer;
