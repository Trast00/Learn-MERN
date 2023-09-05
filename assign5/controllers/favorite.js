import Favorite from '../models/favorite.js'
export const index = async (req, res, next) => {
  /*const listPets = await getPets(req.body.userId)
  console.log("list pet: ", listPets)
  res.render('favorite.ejs', {
    pageTitle: "Cart",
    listPets: []
  })*/
}

export const create = async (req, res, next) => {
  Favorite.create({userId: req.body.userId, petId: req.body.petId})
  .then(result => {
    if(result){
      res.redirect('/pets')
    }
  })
}

export const getPets = async (userId) => {
  Favorite.findAll({where: {id: userId}}).then(listData => {
    const listPets = listData.map(data => data.toJSON())
    return listPets
  })
}