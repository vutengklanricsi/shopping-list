const Sequelize = require('sequelize');

const sequelize = new Sequelize('shoppingList', 'Ricsi', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

const shoppingList = sequelize.define('scoreboard', {
  product: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      allowNull: false,
      notEmpty: true,
      len: [3, 255],
    },
  },
  property: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true,
      allowNull: false,
      notEmpty: true,
      len: [3, 255],
    },
  },
});

module.exports = shoppingList;
