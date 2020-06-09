const list = require('../services/list');

const showList = (req, res) => {
  // list.then((data) => {
  //   res.render('/shoppinglist', {
  //     shoppinglist: data,
  //   })
  // })
  res.render('/shoppinglist', {
    title: 'Shopping List',
    shoppinglist: list,
  })
  console.log(list)
}

module.exports = {
  showList,
};