const S = require("../services");
const H = require("../helpers");
const CT = require("../constants");
const CF = require("../configs/indexControllers");

module.exports = {
  home: async (req, res) => {
    try {
      const { products: productsOffer } = await S.getProductsOffer();
      const { products: productsOutstanding } =
        await S.getProductsOutstanding();
      const bannerHome = await S.getBannerHome();
      H.renderView(res, {
        localsViewItem: { productsOffer, productsOutstanding, bannerHome },
        viewItemPath: CT.PATH_HOME,
        viewParentPath: CT.PATH_LAYOUT_BASIC,
        localsTitle: "Home",
      });
    } catch (err) {
      console.log(err.message);
    }
  },

  search: async (req, res) => {
    try {
      const reqQuery = req.query;
      const keyword = reqQuery.keyword?.toLowerCase();
      const pageSelected = +reqQuery.page || 1;
      const limit = +reqQuery.countElements || 6;
      const withPagination = !!reqQuery.page;
      const fieldsSearch = withPagination
        ? CF.search.fieldsToSearch
        : {
            ...fieldsSearch,
            ...CF.search.externalFieldsFromSearch,
          };

      const config = H.whereSearchProduct({
        fields: fieldsSearch,
        keyword,
      });

      const { products, pages, total } = await S.getProducts(config, {
        withPagination,
        quantityProducts: limit,
        page: pageSelected,
      });

      H.renderView(res, {
        localsViewItem: {
          products,
          pages,
          pageCurrent: pageSelected,
          showPaginator: total > limit,
          labelFilter: `🔍 ${keyword} 🔍`,
          isEndpointPaginatorSearch: true,
          keyword,
        },
        viewItemPath: CT.PATH_PRODUCTS_ALL,
        viewParentPath: CT.PATH_LAYOUT_BASIC,
        localsTitle: "Productos",
      });
    } catch (err) {
      console.log(err.message);
    }
  },
};
