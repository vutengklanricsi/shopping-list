var express = require('express');
var router = express.Router();
const list = require('../services/list');

router.get('/', (req, res) => {
  res.render('/shoppinglist', {
    title: 'Shopping List',
    shoppinglist: list,
  })
  console.log(list)
});

module.exports = router;
