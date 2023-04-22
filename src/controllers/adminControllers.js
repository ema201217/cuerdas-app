const { validationResult } = require("express-validator");
const db = require("../database/models");
const path = require("path");
const { existsSync, unlinkSync } = require("fs");
var svgCaptcha = require("svg-captcha");
const {
  getProducts,
  createProduct,
  createImages,
  getProductById,
  updateProduct,
} = require("../services/products");
const renderView = require("../helpers/renderView");

module.exports = {
  /* LIST PRODUCTS */
  products: async (req, res) => {
    try {
      const products = await getProducts();
      const productsMapped = products.map(p => ({
        ...p.dataValues,
        color:{
          ...p.color,
          hex:JSON.parse(p.color.hex)
        }
      }))
      renderView(res, {
        viewItemPath: "admin/products",
        localsPage: "productos",
        localsTitle: "Admin | Productos",
        localsViewItem: { products: productsMapped },
      });
    } catch (error) {
      console.log(error);
    }
  },
  /* CREATE */
  store: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const product = await createProduct({ data: req.body });
        await createImages({
          data: req.body,
          productId: product.id,
          filesRequest: req.files,
        });
        res.redirect("/admin/productos");
      } else {
        const products = await getProducts();
        renderView(res, {
          viewItemPath: "admin/products",
          localsPage: "productos",
          localsTitle: "Admin | Productos",
          localsViewItem: { products, errors: errors.mapped(), old: req.body },
        });
      }
    } catch (error) {
      res.send(error);
    }
  },
  /* EDIT */
  edit: async (req, res) => {
    const captcha = svgCaptcha.create();
    req.session.captcha = captcha.text;
    const product = await getProductById(req.params.id);
    renderView(res, {
      viewItemPath: "admin/product-edit",
      localsPage: "productos",
      localsTitle: "Admin | Productos | Edición",
      localsViewItem: { product, captcha: captcha.data },
    });
  },
  /* UPDATE */
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { captcha } = req.body;
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const product = await updateProduct(id, { data: req.body });
        await createImages({
          data: req.body,
          productId: id,
          imagesDb: product.images,
          removeBefore: true,
          filesRequest: req.files,
        });
        return res.redirect("/admin/productos");
      }
      const product = await getProductById(id);
      renderView(res, {
        viewItemPath: "admin/product-edit",
        localsPage: "productos",
        localsTitle: "Admin | Productos | Edición",
        localsViewItem: {
          product,
          captcha: captcha.data,
          old: req.body,
          errors: errors.mapped(),
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  /* CATEGORIAS */
  categories: (req, res) => {
    renderView(res, {
      viewItemPath: "admin/categories",
      localsPage: "categorias",
      localsTitle: "Admin | Categorias",
    });
  },

  /* USUARIOS */
  users: (req, res) => {
    renderView(res, {
      viewItemPath: "admin/users",
      localsPage: "usuarios",
      localsTitle: "Admin | Usuarios",
    });
  },

  /* BANNERS */
  banners: (req, res) => {
    renderView(res, {
      viewItemPath: "admin/banners",
      localsPage: "banners",
      localsTitle: "Admin | Banners",
    });
  },

  /* DASHBOARD */
  dashboard: (req, res) => {
    renderView(res, {
      viewItemPath: "admin/dashboard",
      localsPage: "dashboard",
      localsTitle: "Admin | Estadísticas",
    });
  },

  /* EDITOR DE CÓDIGO */
  codeEditor: (req, res) => {
    renderView(res, {
      viewItemPath: "admin/codeEditor",
      localsPage: "code",
      localsTitle: "Admin | Editor de código integrado",
    });
  },

  /* EMPLEADOS */
  staff: (req, res) => {
    renderView(res, {
      viewItemPath: "admin/staff",
      localsPage: "empleados",
      localsTitle: "Admin | Empleados",
    });
  },

  /* BUSCADOR */
  search: (req, res) => {
    renderView(res, {
      viewItemPath: "admin/search",
      localsPage: "",
      localsTitle: "Admin | Buscador",
    });
  },

  /* MENSAJES */
  messages: (req, res) => {
    renderView(res, {
      viewItemPath: "admin/messages",
      localsPage: "mensajes",
      localsTitle: "Admin | Mensajes",
    });
  },

  /* VENTAS */
  sales: (req, res) => {
    renderView(res, {
      viewItemPath: "admin/sales",
      localsPage: "ventas",
      localsTitle: "Admin | Ventas",
    });
  },

  /* NOTAS DE CRÉDITO */

  notesCredits: (req, res) => {
    renderView(res, {
      viewItemPath: "admin/notes-credits",
      localsPage: "notas-creditos",
      localsTitle: "Admin | Notas de créditos",
    });
  },
  /* MARCAS */
  brands: (req, res) => {
    renderView(res, {
      viewItemPath: "admin/brands",
      localsPage: "marcas",
      localsTitle: "Admin | Marcas",
    });
  },
};
