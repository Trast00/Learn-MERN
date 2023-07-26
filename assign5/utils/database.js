const Sequelize = require('sequelize');

const sequelize = new Sequelize('learn-express', 'root', {
  dialect: 'mysql',
  host: 'localhost'
})

module.exports = sequelize