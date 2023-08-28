export const index = (req, res, next) => {
  res.render('cart.ejs', {
    pageTitle: "Cart",
    listPets: []
  })
}