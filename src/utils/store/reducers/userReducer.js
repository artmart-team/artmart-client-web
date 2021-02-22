const initState = {
  user: {},
  access_token: '',
  isLoading: false,
  errors: []
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return state;
    case 'LOADING':
      return { ...state, isLoading: true };
    default:
      return state;
  };
};

export default userReducer;
