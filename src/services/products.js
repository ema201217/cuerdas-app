const db = require("../database/models");

const { removeFiles } = require("../helpers");
module.exports = {
  getProducts: (options = {}) => {
    let products = db.Product.findAll({
      include: [
        "images",
        "color",
        "type",
        "brand",
        "provider",
        { model: db.Subcategory, as: "subcategory", include: ["category"] },
      ],
      ...options,
    });
    return products;
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
      include: ["images", "color", "brand", "type"],
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
    const product = await db.Product.findByPk(id);

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
  removeImageProduct: (id) => {
    return db.Image.destroy({ where: { productId: id } });
  },
};
