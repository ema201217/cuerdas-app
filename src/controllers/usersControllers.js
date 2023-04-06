const { validationResult } = require("express-validator");
const db = require("../database/models");
const { hash } = require("bcryptjs");
const { Op } = require("sequelize");

module.exports = {
  login: (req, res) => {
    return res.render("users/login", (err, renderOld) => {
      if (err) console.log(err);
      res.render("partials/basic", {
        contents: renderOld,
        title: "Inicio de sesión",
      });
    });
  },
  processLogin: async (req, res) => {
    try {
      const { emailOrUsername } = req.body;

      const errors = validationResult(req);

      if (errors.isEmpty()) {
        const config = {
          where: {
            [Op.or]: [
              {
                email: emailOrUsername,
              },
              {
                username: emailOrUsername,
              },
            ],
          },
          include: [{ all: true }],
          attributes: { exclude: ["password"] },
        };
        const user = await db.User.findOne(config);
        req.session.userSession = user;

        if (req.body.remember)
          res.cookie("userCookie", user, {
            maxAge: 1000 * 60,
          });

        res.redirect("/usuario/perfil");
      } else {
        res.render(
          "users/login",
          { errors: errors.mapped(), old: req.body },
          (err, renderOld) => {
            if (err) console.log(err);
            res.render("partials/basic", {
              contents: renderOld,
              title: "Inicio de sesión",
            });
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  },
  register: (req, res) => {
    return res.render("users/register", (err, renderOld) => {
      if (err) console.log(err);
      res.render("partials/basic", {
        contents: renderOld,
        title: "Registro",
      });
    });
  },
  processRegister: async (req, res) => {
    try {
      const { email, username, password } = req.body;
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const passwordHash = await hash(password?.trim(), 12);
        const user = await db.User.create({
          username: username?.trim(),
          email: email?.trim(),
          password: passwordHash,
        });

        await db.Location.create({
          userId: user.id,
        });
        res.redirect("/usuario/ingresar");
      } else {
        res.render(
          "users/register",
          {
            old: req.body,
            errors: errors.mapped(),
          },
          (err, renderOld) => {
            if (err) console.log(err);
            res.render("partials/basic", {
              contents: renderOld,
              title: "Registro",
            });
          }
        );
      }
    } catch (error) {
      res.send(error);
    }
  },
  logout: async (req, res) => {
    try {
      req.session.destroy();
      res.cookie("userCookie", null, { maxAge: 0 });
      res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  },
  shoppingCart: (req, res) => {
    return res.render("users/cart", (err, renderOld) => {
      if (err) console.log(err);
      res.render("partials/basic", {
        contents: renderOld,
        title: "Registro",
      });
    });
  },
  profile: async (req, res) => {
    try {
      return res.render(
        "users/profile",
        (err, renderOld) => {
          if (err) console.log(err);
          res.render("partials/basic", {
            contents: renderOld,
            title: "Perfil de usuario",
          });
        }
      );
    } catch (error) {
      res.send(error);
    }
  },
};
