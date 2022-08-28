module.exports = {
    all : (req,res) => {
        return res.render('products/productsAll')
    },
    detail : (req,res) => {
        return res.render('products/productDetail')
    },
}