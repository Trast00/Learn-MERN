const Sequelize = require('sequelize')
const sequelize = require('../utils/database')
//const { describe } = require('../../../Assets Correct/11-deleting-related-items/models/cart')

const Animal = sequelize.define('pet', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  details: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Animal