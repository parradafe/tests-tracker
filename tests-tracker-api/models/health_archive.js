'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class health_archive extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      health_archive.belongsTo(models.user, {
        foreignKey: 'userId',
        targetKey: 'id',
        as: 'user'
      });
    }
  }
  health_archive.init({
    id: DataTypes.UUID,
    userId: DataTypes.UUID,
    weight: DataTypes.FLOAT,
    skinFolds: DataTypes.JSON,
    bodyPerimeters: DataTypes.JSON,
    corporalDiameters: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'health_archive',
  });
  return health_archive;
};