import Sequelize from 'sequelize'
import sequelize from '../utils/database.js';
//const { describe } = require('../../../Assets Correct/11-deleting-related-items/models/cart')

const Pet = sequelize.define('pet', {
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
    allowNull: true,
  },
  detail: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

export default Pet