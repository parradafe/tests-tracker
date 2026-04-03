'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class variant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      variant.hasMany(models.category_variant, {
        foreignKey: 'variantId',
        sourceKey: 'id',
        as: 'categoryVariants'
      });
      variant.hasMany(models.test, {
        foreignKey: 'variantId',
        sourceKey: 'id',
        as: 'tests'
      });
    }
  }
  variant.init({
    id: DataTypes.UUID,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'variant',
  });
  return variant;
};