'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({Quiz}) {
      this.hasMany(Quiz, {foreignKey: 'themeId'});
    }
  }
  Theme.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    image: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};