'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    static associate({ Theme }) {
      this.belongsTo(Theme, {foreignKey: 'themeId'});
    }
  }
  Quiz.init({
    question: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    image: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    themeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references:{
        model:'Themes',
        key:'id'
      },
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};