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

export const getAll = (req, res, next) => {
  res.render('pets.ejs', {
    pageTitle: "Pets",
    listAnimals: listAnimals})
}

export const getById = () => {
  
}

export const updateId = () => {
  
}
