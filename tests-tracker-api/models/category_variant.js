'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_variant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      category_variant.belongsTo(models.category, {
        foreignKey: 'categoryId',
        targetKey: 'id',
        as: 'category'
      });
      category_variant.belongsTo(models.variant, {
        foreignKey: 'variantId',
        targetKey: 'id',
        as: 'variant'
      });
    }
  }
  category_variant.init({
    id: DataTypes.UUID,
    categoryId: DataTypes.UUID,
    variantId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'category_variant',
  });
  return category_variant;
};