module.exports = {
    login : (req,res) => {
        return res.render(
            "users/login",
            (err, renderOld) => {
              res.render("partials/basic", {
                contents: renderOld,
                title:'Inicio de sesión'
              });
            }
          );
    },
    register : (req,res) => {
        return res.render(
            "users/register",
            (err, renderOld) => {
              res.render("partials/basic", {
                contents: renderOld,
                title:'Registro'
              });
            }
          );
    },
    shoppingCart : (req,res) => {
        return res.render(
            "users/cart",
            (err, renderOld) => {
              res.render("partials/basic", {
                contents: renderOld,
                title:'Registro'
              });
            }
          );
    },
    profile:(req,res) => {
        return res.render(
            "users/profile",
            (err, renderOld) => {
              res.render("partials/basic", {
                contents: renderOld,
                title:'Perfil de usuario'
              });
            }
          );
    },
}