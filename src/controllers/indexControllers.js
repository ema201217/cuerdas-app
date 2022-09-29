const db = require("../database/models");

module.exports = {
  index: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include: ['images','brand','type','color','subcategory','provider']
      });
      res.send(products);
    } catch (err) {
      res.send(err);
    }
    // const banners = db.Banner.findAll({});

    // const bannerHome = banners.find(banner => banner.view === "home")
    // /* FILTRAMOS LOS PRODUCTOS EN OFERTA, EN STOCK Y DISPONIBLES */
    // const productsOffer = products.filter(
    //   ({ available, showInOffer, stock }) => available && showInOffer && stock
    // );
    // /* FILTRAMOS LOS PRODUCTOS DESTACADOS, EN STOCK Y DISPONIBLES */
    // const productsOutstanding = products.filter(
    //   ({ available, outstanding, stock }) => available && outstanding && stock
    // );

    // res.render(
    //   "index",
    //   { productsOffer, productsOutstanding,bannerHome },
    //   (err, renderOld) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //     res.render("partials/basic", {
    //       contents: renderOld,
    //       title: "Home",
    //     });
    //   }
    // );
  },

  search: (req, res) => {
    const keyword = req.query.keyword?.toLowerCase();
    const products = readDB("products.json");
    const productsFound = products.filter((product) =>
      JSON.stringify(product).toLowerCase().includes(keyword)
    );

    console.log(productsFound);
    return res.render(
      "products/productsAll",
      {
        products: productsFound,
      },
      (err, renderOld) => {
        res.render("partials/basic", {
          title: "Productos",
          contents: renderOld,
        });
      }
    );
  },
};
