const {
  getBannerHome,
  getBannerById,
  getBanners,
} = require("./banners");

const {
  getProducts,
  createProduct,
  createImages,
  getProductById,
  updateProduct,
  getProductsOffer,
  getProductsOutstanding,
} = require("./products");

module.exports = {
  getProducts,
  createProduct,
  createImages,
  getProductById,
  updateProduct,
  getProductsOffer,
  getProductsOutstanding,
  getBanners,
  getBannerById,
  getBannerHome,
};
