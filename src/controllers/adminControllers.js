const db = require("../database/models");
const path = require("path");

var svgCaptcha = require("svg-captcha");

module.exports = {
  /* PRODUCTOS */
  products: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include: [
          "images",
          "color",
          "type",
          "brand",
          "provider",
          { model: db.Subcategory, as: "subcategory", include: ["category"] },
        ],
      });
      return res.render(
        "admin/products",
        { products },
        (err, renderProducts) => {
          if (err) {
            console.log(err);
          }
          res.render("partials/sidebar", {
            page: "productos",
            contents: renderProducts,
            title: "Admin | Productos",
          });
        }
      );
    } catch (error) {}
  },
  store: async (req, res) => {
    const {
      title,
      quantity,
      brandId,
      price,
      discount,
      typeId,
      colorId,
      showInOffer,
      outstanding,
      subtitle,
      description,
      madeIn,
      subcategoryId,
      available,
      stock,
      freeShipping,
      categoryId,
      model,
      priceShipping,
      providerId,
      captcha,
    } = req.body;
    try {
      console.log(req.body);

      const p = await db.Product.create({
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

      /* upload from images */
      const files = req.files ? [req.files?.imgsFiles].flat(3) : null;
      if (files) {
        files.forEach(({ mv, name }) =>
          mv(path.join(__dirname, `../../public/images/Products/${name}`))
        );
        const images = files.map(({ name }) => ({
          img: name,
          productId: p.id,
        }));
        // create images new
        await db.ImageProduct.bulkCreate(images);
      }

      res.redirect("/admin/productos");
    } catch (error) {
      console.log(error);
    }
  },
  edit: async (req, res) => {
    const captcha = svgCaptcha.create();
    /* req.session.captcha = captcha.text; */

    const product = await db.Product.findByPk(req.params.id, {
      include: ["images", "color", "brand", "type"],
    });

    res.render(
      "admin/product-edit",
      { product, captcha: captcha.data, link: req.get("host") },

      (err, renderEditProduct) => {
        if (err) {
          console.log(err);
        }
        res.render("partials/sidebar", {
          page: "productos",
          contents: renderEditProduct,
          title: "Admin | Productos | Edición",
        });
      }
    );
  },
  update: async (req, res) => {
    const id = req.params.id;
    const {
      title,
      quantity,
      brandId,
      price,
      discount,
      typeId,
      colorText,
      showInOffer,
      outstanding,
      subtitle,
      description,
      madeIn,
      subcategoryId,
      available,
      stock,
      freeShipping,
      colorId,
      colorsHex,
      model,
      priceShipping,
      captcha,
    } = req.body;
    console.log(colorsHex);
    try {
      const p = await db.Product.findByPk(id);

      p.title = title?.trim();
      p.model = model?.trim();
      p.quantity = +quantity;
      p.brandId = +brandId;
      p.price = +price;
      p.discount = +discount;
      p.typeId = +typeId;
      p.showInOffer = !!showInOffer;
      p.outstanding = !!outstanding;
      p.available = !!available;
      p.stock = !!stock;
      p.freeShipping = !!freeShipping;
      p.priceShipping = +priceShipping;
      p.colorId = +colorId;
      p.subtitle = subtitle?.trim();
      p.description = description?.trim();
      p.madeIn = madeIn?.trim();
      p.subcategoryId = subcategoryId?.trim();

      await p.save();

      /* upload from images */
      const files = req.files ? [req.files?.imgsFiles].flat(3) : null;
      if (files) {
        files.forEach(({ mv, name }) =>
          mv(path.join(__dirname, `../../public/images/Products/${name}`))
        );
        const images = files.map(({ name }) => ({ img: name, productId: +id }));
        // create images new
        await db.ImageProduct.bulkCreate(images);
      }

      res.redirect("/admin/productos");
    } catch (error) {
      console.log(error);
    }
  },
  
  /* CATEGORIAS */
  categories: (req, res) => {
    res.render("admin/categories", {}, (err, renderProducts) => {
      if (err) {
        console.log(err);
      }
      res.render("partials/sidebar", {
        page: "categorias",
        contents: renderProducts,
        title: "Admin | Categorias",
      });
    });
  },

  /* USUARIOS */
  users: (req, res) => {
    res.render("admin/users", {}, (err, renderProducts) => {
      res.render("partials/sidebar", {
        page: "usuarios",
        contents: renderProducts,
        title: "Admin | Usuarios",
      });
    });
  },

  /* BANNERS */
  banners: (req, res) => {
    const banners = readDB("banners.json");
    res.render("admin/banners", { banners }, (err, renderProducts) => {
      res.render("partials/sidebar", {
        page: "banners",
        contents: renderProducts,
        title: "Admin | Productos",
      });
    });
  },

  /* DASHBOARD */
  dashboard: (req, res) => {
    res.render("admin/dashboard", {}, (err, renderProducts) => {
      res.render("partials/sidebar", {
        page: "dashboard",
        contents: renderProducts,
        title: "Admin | Estadísticas",
      });
    });
  },

  /* EDITOR DE CÓDIGO */
  codeEditor: (req, res) => {
    res.render("admin/codeEditor", {}, (err, renderProducts) => {
      res.render("partials/sidebar", {
        page: "code",
        contents: renderProducts,
        title: "Editor de código integrado",
      });
    });
  },

  /* EMPLEADOS */
  staff: (req, res) => {
    res.render("admin/staff", {}, (err, renderProducts) => {
      res.render("partials/sidebar", {
        page: "empleados",
        contents: renderProducts,
        title: "Admin | Empleados",
      });
    });
  },

  /* BUSCADOR */
  search: (req, res) => {
    res.render("admin/search", {}, (err, renderProducts) => {
      res.render("partials/sidebar", {
        page: "",
        contents: renderProducts,
        title: "Admin | Buscador",
      });
    });
  },

  /* MENSAJES */
  messages: (req, res) => {
    res.render("admin/messages", {}, (err, renderProducts) => {
      res.render("partials/sidebar", {
        page: "mensajes",
        contents: renderProducts,
        title: "Admin | Buscador",
      });
    });
  },

  /* VENTAS */
  sales: (req, res) => {
    res.render("admin/sales", {}, (err, renderProducts) => {
      res.render("partials/sidebar", {
        page: "ventas",
        contents: renderProducts,
        title: "Admin | Buscador",
      });
    });
    return res.render("admin/sales");
  },

  /* NOTAS DE CRÉDITO */
  notesCredits: (req, res) => {
    res.render("admin/messages", {}, (err, renderProducts) => {
      res.render("partials/sidebar", {
        page: "notas-creditos",
        contents: renderProducts,
        title: "Admin | Buscador",
      });
    });
    return res.render("admin/notes-credits");
  },
  /* MARCAS */
  brands: (req, res) => {
    res.render("admin/brands", {}, (err, renderProducts) => {
      res.render("partials/sidebar", {
        page: "marcas",
        contents: renderProducts,
        title: "Admin | Marcas",
      });
    });
    return res.render("admin/notes-credits");
  },
};
