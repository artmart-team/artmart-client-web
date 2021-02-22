const initState = {
  name: ''
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return state;
    default:
      return state;
  };
};

export default userReducer;
