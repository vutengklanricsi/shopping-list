const shoppingListTable = require('../models/shoppingListTable');

const listData = () => {
  const exportData = [];
  shoppingListTable.forEach((data) => {
    exportData.push({
      product: data.id,
      properties: data.properties,
    });
  });
  return exportData;
};

module.exports = {
  listData,
};
