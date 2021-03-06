// Index for collecting router path, so when importing just destructure from here.
const path = {
  home: '/',
  loginArtist: '/login/artist',
  loginCustomer: '/login/customer',
  registerCustomer: '/register/customer',
  registerArtist: '/register/artist',
  stallForm: '/stall/add',
  artistPortfolio: '/stall/:stallId',
  orderDescribe: '/order/describe/:artistId',
  orderCheckout: '/order/checkout/:artistId',
  orderProcess: '/user/:userId/artist/:artistId/order/:orderId/process',
  orderFinish: '/order/finish/:orderId',
  artistPage: '/artist/:artistId',
  artistEditProfile: '/artist/:artistId/edit',
  userPage: '/user/:userId',
  userEditProfile: '/user/:userId/edit',
  userOrder: '/user/order',
  artistOrder: '/artist/:artistId/orders',
  artistOption: '/artist/:artistId/option',
  submitCommission: '/order/submit/:orderId',
  orderActive: '/artist/:artistId/orders/active',
  reviewPage: '/artist/:artistId/review'
};

export default path;
