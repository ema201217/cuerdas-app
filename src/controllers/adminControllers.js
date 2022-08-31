module.exports = {
  /* PRODUCTOS */
  products: (req, res) => {
    return res.render("admin/products");
  },
  edit: (req, res) => {
    return res.render("admin/product-edit");
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
    return res.render("admin/banners");
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
