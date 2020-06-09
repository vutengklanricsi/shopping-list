'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('shoppingListTables', [{
      product: 'ST. ANDREA',
      properties: 'Igazan Egri Bikaver Grand Superior 2016',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      product: 'Pottyos Turo Rudi',
      properties: 'Kakaos masszaval bevont edeskes-savanykas turorud',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      product: 'Brokkoli',
      properties: 'Edible green plant in the cabbage family',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('shoppingListTables', null, {});
  }
};
