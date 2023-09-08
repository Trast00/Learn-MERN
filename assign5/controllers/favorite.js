import Favorite from '../models/favorite.js'
import User from '../models/user.js'
export const index = (req, res, next) => {
  getPets(req.body.userId).then(listPets => {
    console.log("list Data GOT: ", listPets)
    res.render('favorite', {
      pageTitle: "Cart",
      listPets: listPets || []
    })
  })
}

export const create = async (req, res, next) => {
  console.log("Pet SAVED: ", req.body)
  Favorite.create({userId: req.body.userId, petId: req.body.petId})
  .then(result => {
    if(result){
      res.redirect('/pets')
    }
  })
}

export const getPets = async (userId) => {
  const listData = await Favorite.findAll({where: {userId: userId}})
  const listPets = listData.map((favorite) => favorite.getPet())
  console.log('list data saved:', listPets)
  return listPets
}