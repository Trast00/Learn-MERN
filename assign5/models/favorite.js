import Sequelize from 'sequelize'
import sequelize from '../utils/database.js';

const Favorite = sequelize.define('favorite', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  petId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  }
});

export default Favorite;
