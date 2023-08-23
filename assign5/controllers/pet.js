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
  res.render('pets/index.ejs', {
    pageTitle: "Pets",
    listAnimals: listAnimals
  })
}

export const add = (req, res, next) => {
  res.render('pets/add.ejs', {
    pageTitle: "Pets",
    listAnimals: listAnimals
  })
}

export const create = (req, res, next) => {
  console.log("start:", req.body)
  const {name, detail} = req.body
  console.log("start2:", name, detail)
  // save in database
  Pet.create({name: name, imageUrl: "", detail: detail})
  .then(result => {
    console.log("result:", result)
    //const result = pet.save()
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
