import Pet from "../models/pet.js"

const listAnimals = [
  {
    id: 1,
    name: "Mouse",
    imgUrl: "aaa",
    ownerId: 1,
  },
  {
    id: 2,
    name: "Cat",
    imgUrl: "aaa",
    ownerId: 1,
  },
  {
    id: 3,
    name: "Pigeon",
    imgUrl: "aaa",
    ownerId: 2,
  }
]

export const index = (req, res, next) => {
  Pet.findAll().then(result => {
    const allPets = [...listAnimals, ...result.map(pet => pet.toJSON())]
    console.log("LIST PET:", allPets)
    res.render('pets/index.ejs', {
      pageTitle: "Pets",
      listAnimals: allPets
    })
  })
}

export const add = (req, res, next) => {
  res.render('pets/add.ejs', {
    pageTitle: "Pets"
  })
}

export const create = (req, res, next) => {
  const {name, imageUrl, detail} = req.body
  // save in database
  Pet.create({name: name, imageUrl: imageUrl, detail: detail})
  .then(result => {
    if(result){
      res.redirect('/pets')
    } else {
      res.redirect('/pets/add')
    }
  })
}

export const getById = () => {
  
}

export const updateId = () => {
  
}
