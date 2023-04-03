module.exports = {
  changePassword:(req,res) => {
      return res.render(
          "users/change-pass",
          (err, renderOld) => {
            res.render("partials/basic", {
              contents: renderOld,
              title:'Cambiar Password'
            });
          }
        );
  },
  recoverPass:(req,res) => {
      return res.render(
          "users/recover-pass",
          (err, renderOld) => {
            res.render("partials/basic", {
              contents: renderOld,
              title:'Recuperar Password'
            });
          }
        );
  },
  newPass:(req,res) => {
      return res.render(
          "users/new-pass",
          (err, renderOld) => {
            res.render("partials/basic", {
              contents: renderOld,
              title:'Nuevo Password'
            });
          }
        );
  },
}