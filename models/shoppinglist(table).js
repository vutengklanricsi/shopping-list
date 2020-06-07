'use strict';
module.exports = (sequelize, DataTypes) => {
  const shoppingListTable = sequelize.define('shoppingListTable', {
    product: DataTypes.STRING,
    property: DataTypes.STRING
  }, {});
  shoppingListTable.associate = function(models) {
    // associations can be defined here
  };
  return shoppingListTable;
};