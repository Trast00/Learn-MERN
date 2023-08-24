import Pet from "../models/pet.js"

export const index = (req, res, next) => {
  Pet.findAll().then(result => {
    const allPets = [...result.map(pet => pet.toJSON())]
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

export const destroy = (req, res, next) => {
  console.log("destroy id:", req.params.id)
  const id = req.params.id
  Pet.destroy({where: {id: id}}).then(_ => {
    res.redirect('/pets')
  }) 
}

export const update = () => {
  
}
