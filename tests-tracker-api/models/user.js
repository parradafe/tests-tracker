'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.result, {
        foreignKey: 'userId',
        sourceKey: 'id',
        as: 'results'
      });
      user.hasMany(models.health_archive, {
        foreignKey: 'userId',
        sourceKey: 'id',
        as: 'healthArchives'
      });
    }
  }
  user.init({
    id: DataTypes.UUID,
    nickname: DataTypes.STRING,
    height: DataTypes.FLOAT,
    weight: DataTypes.FLOAT,
    skinFolds: DataTypes.JSON,
    bodyPerimeters: DataTypes.JSON,
    corporalDiameters: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};