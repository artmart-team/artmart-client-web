// Index for collecting router path, so when importing just destructure from here.
const path = {
  home: '/',
  login: '/login',
  register: '/register',
  stallForm: '/stall/add',
  artistPortfolio: '/stall/:stallId',
  orderDescribe: '/order/describe/:orderId',
  orderCheckout: '/order/checkout/:orderId',
  orderProcess: '/order/process/:orderId',
  orderFinish: '/order/finish/:orderId',
  artistPage: '/artist/:artistId',
  userPage: '/user/:userId'
};

export default path;
