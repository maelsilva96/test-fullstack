const routeApi = 'http://localhost:3333/';

export const routes = {
  routeAuth: routeApi + 'auth',
  routeCreateAndAuth: routeApi + 'createAndAuth',
  routeListProducts: routeApi + 'product/list',
  routeCreateProduct: routeApi + 'product',
  routeGetOrUpdateOrDeleteProduct: routeApi + 'product/',
  routeNotifications: routeApi + 'logUser/byUser',
  routeSaveImage: routeApi + 'saveImage'
};
