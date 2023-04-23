const { ID_PAGE_HOME } = require("../constants/views");
const configs = require("../configs/bannersServices");
const db = require("../database/models");
const servicesBanners = {
  getBanners: () => db.Banner.findAll(),
  getBannerById: (id, options = {}) => db.Banner.findByPk(id, options),
  getBannerHome: () =>
    servicesBanners.getBannerById(ID_PAGE_HOME, configs.home),
};

module.exports = servicesBanners
