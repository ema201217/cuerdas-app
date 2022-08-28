module.exports = {
  
  categories : (req,res) => {
      return res.render('admin/categories')
  },
  users : (req,res) => {
      return res.render('admin/users')
  },
  products : (req,res) => {
      return res.render('admin/products')
  },
  banners : (req,res) => {
      return res.render('admin/banners')
  },
  dashboard : (req,res) => {
      return res.render('admin/dashboard')
  },
  codeEditor : (req,res) => {
      return res.render('admin/codeEditor')
  },
  staff : (req,res) => {
      return res.render('admin/staff')
  },
  search : (req,res) => {
      return res.render('admin/search')
  },
  messages : (req,res) => {
      return res.render('admin/messages')
  },
  sales : (req,res) => {
      return res.render('admin/sales')
  },
  notesCredits : (req,res) => {
      return res.render('admin/notes-credits')
  },

}