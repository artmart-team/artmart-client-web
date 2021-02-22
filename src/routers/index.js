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
  orderProcess: '/order/process/:orderId',
  orderFinish: '/order/finish/:orderId',
  artistPage: '/artist/:artistId',
  artistEditProfile: '/artist/:artistId/edit',
  userPage: '/user/:userId',
  userEditProfile: '/user/:userId/edit',
  artistOrder: '/artist/order'
};

export default path;
