'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      category.hasMany(models.category_variant, {
        foreignKey: 'categoryId',
        sourceKey: 'id',
        as: 'categoryVariants'
      });
      category.hasMany(models.test, {
        foreignKey: 'categoryId',
        sourceKey: 'id',
        as: 'tests'
      });
    }
  }
  category.init({
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};