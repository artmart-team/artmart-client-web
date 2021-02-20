// Index for collecting router path, so when importing just destructure from here.
const path = {
  home: '/',
  login: '/login',
  register: '/register',
  artistPortfolio: '/stall/:stallId',
  orderDescribe: '/order/describe/:orderId',
  orderCheckout: '/order/checkout/:orderId',
  orderProcess: '/order/process/:orderId',
  orderFinish: '/order/finish/:orderId'
};

export default path;
