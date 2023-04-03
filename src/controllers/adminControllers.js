const db = require('../database/models')

var svgCaptcha = require("svg-captcha");

module.exports = {
  /* PRODUCTOS */
  products: async (req, res) => {
    try {
      
      const products = db.Product.findAll(
        {
          include:['images']
        }
        );
      res.render(
        "admin/products",
        { products },
        (err, renderProducts) => {
          res.render("partials/sidebar", {
            page: "productos",
            contents: renderProducts,
            title: "Admin | Productos",
          });
        }
      );

    } catch (error) {
      
    }
  },

  edit: (req, res) => {
    const captcha = svgCaptcha.create();
    /* req.session.captcha = captcha.text; */
    
    const productFind = readDB("products.json").find(
      ({ id }) => id === +req.params.id
    );

    res.render(
      "admin/product-edit",
      { product:productFind, 
        captcha: captcha.data,
        link: req.get('host') },

      (err, renderEditProduct) => {
        console.log(err);
        res.render("partials/sidebar", {
          page: "productos",
          contents: renderEditProduct,
          title: "Admin | Productos | Edición",
        });
      }
    );
  },

  /* CATEGORIAS */
  categories: (req, res) => {
    res.render(
      "admin/categories",
      {},
      (err, renderProducts) => {
        res.render("partials/sidebar", {
          page: "categorias",
          contents: renderProducts,
          title: "Admin | Categorias",
        });
      }
    );
  },

  /* USUARIOS */
  users: (req, res) => {
    res.render(
      "admin/users",
      {},
      (err, renderProducts) => {
        res.render("partials/sidebar", {
          page: "usuarios",
          contents: renderProducts,
          title: "Admin | Usuarios",
        });
      }
    );
  },

  /* BANNERS */
  banners: (req, res) => {
    const banners = readDB("banners.json");
    res.render(
      "admin/banners",
      { banners },
      (err, renderProducts) => {
        res.render("partials/sidebar", {
          page: "banners",
          contents: renderProducts,
          title: "Admin | Productos",
        });
      }
    );
  },

  /* DASHBOARD */
  dashboard: (req, res) => {
    res.render(
      "admin/dashboard",
      {},
      (err, renderProducts) => {
        res.render("partials/sidebar", {
          page: "dashboard",
          contents: renderProducts,
          title: "Admin | Estadísticas",
        });
      }
    );
  },

  /* EDITOR DE CÓDIGO */
  codeEditor: (req, res) => {
    res.render(
      "admin/codeEditor",
      {},
      (err, renderProducts) => {
        res.render("partials/sidebar", {
          page: "code",
          contents: renderProducts,
          title: "Editor de código integrado",
        });
      }
    );
  },

  /* EMPLEADOS */
  staff: (req, res) => {
    res.render(
      "admin/staff",
      {},
      (err, renderProducts) => {
        res.render("partials/sidebar", {
          page: "empleados",
          contents: renderProducts,
          title: "Admin | Empleados",
        });
      }
    );
  },

  /* BUSCADOR */
  search: (req, res) => {
    res.render(
      "admin/search",
      {},
      (err, renderProducts) => {
        res.render("partials/sidebar", {
          page: "",
          contents: renderProducts,
          title: "Admin | Buscador",
        });
      }
    );
  },

  /* MENSAJES */
  messages: (req, res) => {
    res.render(
      "admin/messages",
      {},
      (err, renderProducts) => {
        res.render("partials/sidebar", {
          page: "mensajes",
          contents: renderProducts,
          title: "Admin | Buscador",
        });
      }
    );
  },

  /* VENTAS */
  sales: (req, res) => {
    res.render(
      "admin/sales",
      {},
      (err, renderProducts) => {
        res.render("partials/sidebar", {
          page: "ventas",
          contents: renderProducts,
          title: "Admin | Buscador",
        });
      }
    );
    return res.render("admin/sales");
  },

  /* NOTAS DE CRÉDITO */
  notesCredits: (req, res) => {
    res.render(
      "admin/messages",
      {},
      (err, renderProducts) => {
        res.render("partials/sidebar", {
          page: "notas-creditos",
          contents: renderProducts,
          title: "Admin | Buscador",
        });
      }
    );
    return res.render("admin/notes-credits");
  },
  /* MARCAS */
  brands: (req, res) => {
    res.render(
      "admin/brands",
      {},
      (err, renderProducts) => {
        res.render("partials/sidebar", {
          page: "marcas",
          contents: renderProducts,
          title: "Admin | Marcas",
        });
      }
    );
    return res.render("admin/notes-credits");
  },
};
