const shoppingListTable = require('../models/shoppingListTable');
const shoppingList = require('./shoppingList.json');

module.exports = {
  seedGame: async () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const data of shoppingList) {
      await shoppingListTable.create(data);
    }
  },
};
