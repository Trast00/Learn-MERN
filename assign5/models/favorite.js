import Sequelize from 'sequelize'
import sequelize from '../utils/database.js';

const Favorite = sequelize.define('favorite', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

export default Favorite;
