const config = {
  dev: process.env.LOCAL,
  stage: process.env.STAGE,
  prod: process.env.PRODUCTION,
  endpoint: {
    login: '/api/login',
    customerClaim: 'api/customerclaim',
    viewCustomerClaims: 'api/viewcustomerclaim',
    detailsByPnr: 'api/detailsbypnr',
    forgotPasswordRoute: '/users/{token}/forgotPassword',
    uploadImage: 'api/uploadImage',
    lockerUploadImage: 'api/lockerUploadImage',
    getAllRecordedItems: 'api/getAllRecordedItems',
    getCustomerClaimByRefrenceNumber: 'api/getCustomerClaimByRefrenceNumber',
    serialnumber: 'api/serialnumber',
    getAirports: 'api/getAirports',
    viewLostItemLocation: 'api/viewLostItemLocation',
    recorditem: 'api/recorditem',
    viewUsers: 'api/viewUsers',
    viewUserRole: 'api/viewUserRole',
    viewStations: 'api/viewStations',
    viewRegions: 'api/viewRegions',
    itemsFoundInLocker: 'api/itemsFoundInLocker',
    addUsers: 'api/addUsers',
    addStations: 'api/addStations',
    addRegions: 'api/addRegions',
    logout: 'api/logout'
  },
  imageBaseBoardingPassPath: 'http://172.30.47.110:8080/lostfoundimages/customer/boardingpass/',
  imageBaseLockerPath: 'http://172.30.47.110:8080/lostfoundimages/customer/lockeritemimage/',
};

module.exports = config;
