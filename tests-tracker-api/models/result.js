'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      result.belongsTo(models.test, {
        foreignKey: 'testId',
        targetKey: 'id',
        as: 'test'
      });
      result.belongsTo(models.user, {
        foreignKey: 'userId',
        targetKey: 'id',
        as: 'user'
      });
    }
  }
  result.init({
    id: DataTypes.UUID,
    testId: DataTypes.UUID,
    userId: DataTypes.UUID,
    date: DataTypes.DATE,
    inputValues: DataTypes.JSON,
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'result',
  });
  return result;
};