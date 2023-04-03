module.exports = {
  contact : (req,res) => {
    return res.render(
      "info/contact",
      (err, renderOld) => {
        res.render("partials/basic", {
          contents: renderOld,
          title:'Contacto'
        });
      }
    );
  },
  contactStore : (req,res) => {
      return 
  },

}