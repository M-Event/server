'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(models.Category, {foreignKey: 'CategoryId'})
      Event.belongsTo(models.User, {foreignKey: 'UserId'})
      Event.hasMany(models.Transaction, {foreignKey: 'EventId'})
      
    }
  }
  Event.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    eventDate: DataTypes.STRING,
    imgPoster: DataTypes.STRING,
    isFree: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    location: DataTypes.GEOMETRY,
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};