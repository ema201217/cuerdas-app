const { readDB } = require("../data");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  /* PRODUCTOS */
  products: (req, res) => {
    const products = readDB('products.json')
    return res.render("admin/products",{products,toThousand});
  },
  edit: (req, res) => {
    return res.render("admin/product-edit");
  },

  /* CATEGORIAS */
  categories: (req, res) => {
    const categories = readDB('categories.json')
    return res.render("admin/categories",{categories});
  },

  /* USUARIOS */
  users: (req, res) => {
    const users = readDB('users.json')
    return res.render("admin/users",{users});
  },

  /* BANNERS */
  banners: (req, res) => {
    const banners = readDB('banners.json')
    return res.render("admin/banners",{banners});
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
