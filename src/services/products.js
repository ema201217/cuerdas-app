const db = require("../database/models");
const configs = require("../configs/productsServices");
const { removeFiles } = require("../helpers");

const servicesProducts = {
  getProducts: async (
    options = {},
    { withPagination = false, page = 1, quantityProducts = 8 } = {}
  ) => {
    const method = withPagination ? "paginate" : "findAll";
    let config = {
      ...configs.getProducts,
      ...options,
    };

    if (withPagination) {
      config = { ...config, page, paginate: quantityProducts };
    }

    const data = await db.Product[method](config);

    const products = withPagination ? data.docs : data;
    const pages = withPagination ? data.pages : 1;
    const total = withPagination ? data.total : products.length;
    return { products, pages, total };
  },
  createProduct: ({ data }) => {
    const {
      title,
      model,
      quantity,
      brandId,
      price,
      discount,
      typeId,
      colorId,
      showInOffer,
      outstanding,
      providerId,
      available,
      stock,
      freeShipping,
      priceShipping,
      subtitle,
      description,
      madeIn,
      subcategoryId,
    } = data;
    const product = db.Product.create({
      title: title?.trim(),
      model: model?.trim(),
      quantity: +quantity,
      brandId: +brandId,
      price: +price,
      discount: +discount,
      typeId: +typeId,
      colorId: +colorId,
      showInOffer: !!showInOffer,
      outstanding: !!outstanding,
      providerId: +providerId,
      available: !!available,
      stock: !!stock,
      freeShipping: !!freeShipping,
      priceShipping: +priceShipping,
      subtitle: subtitle?.trim(),
      description: description?.trim(),
      madeIn: madeIn?.trim(),
      subcategoryId: subcategoryId?.trim(),
    });
    return product;
  },
  createImages: ({
    data,
    filesRequest,
    productId,
    imagesDb = [],
    removeBefore = false,
  }) => {
    const { imgText, removeImgBefore } = data;
    let images = [];
    const files = filesRequest ? [filesRequest?.imgsFiles].flat(3) : null;

    if (imgText) images.push({ img: imgText, productId });

    if (files) {
      if (removeImgBefore && removeBefore) {
        removeFiles({ files: imagesDb, propToRead: "img" });
        db.Image.destroy({ where: { productId } });
      }

      const imagesMapped = files.map(({ name }) => ({
        img: name,
        productId,
      }));
      images = [...images, ...imagesMapped];
    }
    if (files || imgText) {
      return db.ImageProduct.bulkCreate(images);
    }
  },
  getProductById: (id, options = {}) => {
    const product = db.Product.findByPk(id, {
      ...configs.getProductById,
      ...options,
    });
    return product;
  },
  updateProduct: async (id, { data }) => {
    const {
      title,
      model,
      quantity,
      brandId,
      price,
      discount,
      typeId,
      showInOffer,
      outstanding,
      available,
      stock,
      freeShipping,
      priceShipping,
      colorId,
      subtitle,
      description,
      madeIn,
      subcategoryId,
    } = data;
    const product = await servicesProducts.getProductById(id);

    product.title = title?.trim();
    product.model = model?.trim();
    product.quantity = +quantity;
    product.brandId = +brandId;
    product.price = +price;
    product.discount = +discount;
    product.typeId = +typeId;
    product.showInOffer = !!showInOffer;
    product.outstanding = !!outstanding;
    product.available = !!available;
    product.stock = !!stock;
    product.freeShipping = !!freeShipping;
    product.priceShipping = +priceShipping;
    product.colorId = +colorId;
    product.subtitle = subtitle?.trim();
    product.description = description?.trim();
    product.madeIn = madeIn?.trim();
    product.subcategoryId = subcategoryId?.trim();
    return product.save();
  },
  removeImageProduct: (productId) => db.Image.destroy({ where: { productId } }),
  getProductsOffer: () =>
    servicesProducts.getProducts(configs.getProductsOffer),
  getProductsOutstanding: () =>
    servicesProducts.getProducts(configs.getProductsOutstanding),
};

module.exports = servicesProducts;
