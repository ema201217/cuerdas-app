const { readDB } = require("../data");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
var svgCaptcha = require("svg-captcha");

module.exports = {
  /* PRODUCTOS */
  products: (req, res) => {
    const products = readDB("products.json");
    res.render(
      "admin/products",
      { products, toThousand },
      (err, renderProducts) => {
        res.render("partials/sidebar", {
          page: "productos",
          contents: renderProducts,
          title: "Admin | Productos",
        });
      }
    );
  },

  edit: (req, res) => {
    const captcha = svgCaptcha.create();
    /* req.session.captcha = captcha.text; */
    
    const productFind = readDB("products.json").find(
      ({ id }) => id === +req.params.id
    );
console.log(req.host);
    res.render(
      "admin/product-edit",
      { ...productFind, captcha: captcha.data },
      (err, renderEditProduct) => {
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
    return res.render("admin/categories");
  },

  /* USUARIOS */
  users: (req, res) => {
    return res.render("admin/users");
  },

  /* BANNERS */
  banners: (req, res) => {
    const banners = readDB("banners.json");
    return res.render("admin/banners", { banners });
  },

  /* DASHBOARD */
  dashboard: (req, res) => {
    return res.render("admin/dashboard");
  },

  /* EDITOR DE CÓDIGO */
  codeEditor: (req, res) => {
    return res.render("admin/codeEditor");
  },

  /* EMPLEADOS */
  staff: (req, res) => {
    return res.render("admin/staff");
  },

  /* BUSCADOR */
  search: (req, res) => {
    return res.render("admin/search");
  },

  /* MENSAJES */
  messages: (req, res) => {
    return res.render("admin/messages");
  },

  /* VENTAS */
  sales: (req, res) => {
    return res.render("admin/sales");
  },

  /* NOTAS DE CRÉDITO */
  notesCredits: (req, res) => {
    return res.render("admin/notes-credits");
  },
};
