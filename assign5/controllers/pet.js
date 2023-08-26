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

export const edit = (req, res, next) => {
  const id = req.params.id
  Pet.findByPk(id).then(data => {
    const pet = data.toJSON()
    res.render('pets/edit', {
      pageTitle: `${pet.name} update`,
      pet: pet,
    })
  })
}

export const updatePet = (req, res, next) => {
  const id = req.params.id
  const {name, imageUrl, detail} = req.body
  Pet.findByPk(id)
  //save pet in database
  .then(pet => {
    pet.set({name, imageUrl, detail})
    return pet.save()
  })
  //send response
  .then(result => {
    if (result){
      res.redirect('/pets')
    }
  })
}

export const destroy = (req, res, next) => {
  const id = req.params.id
  Pet.destroy({where: {id: id}}).then(_ => {
    res.redirect('/pets')
  }) 
}

export const update = () => {
  
}
