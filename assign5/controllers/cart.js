import Cart from '../models/cart.js'
export const index = async (req, res, next) => {
  const listPets = await getPets(req.body.userId)
  console.log("list pet: ", listPets)
  res.render('cart.ejs', {
    pageTitle: "Cart",
    listPets: []
  })
}

export const getPets = async (userId) => {
  Cart.findAll({where: {id: userId}}).then(listData => {
    const listPets = listData.map(data => data.toJSON())
    return listPets
  })
}