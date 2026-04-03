'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      test.belongsTo(models.category, {
        foreignKey: 'categoryId',
        targetKey: 'id',
        as: 'category'
      });
      test.belongsTo(models.variant, {
        foreignKey: 'variantId',
        targetKey: 'id',
        as: 'variant'
      });
      test.hasMany(models.result, {
        foreignKey: 'testId',
        sourceKey: 'id',
        as: 'results'
      });
    }
  }
  test.init({
    id: DataTypes.UUID,
    categoryId: DataTypes.UUID,
    variantId: DataTypes.UUID,
    name: DataTypes.CHAR,
    description: DataTypes.CHAR,
    icon: DataTypes.STRING,
    inputValues: DataTypes.JSON,
    referenceValues: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'test',
  });
  return test;
};