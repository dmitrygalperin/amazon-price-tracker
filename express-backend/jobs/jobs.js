const Item = require('../models/item');

var i;
var limit;
var asins;

function updateItemPrices() {
  i = 0;
  Item.getAllItems((err, results, response) => {
    if(err) console.log(err);
    if(results) {
      asins = [];
      for(var j = 0; j < results.length; j++) {
        asins.push(results[j].asin);
      }
      limit = asins.length;
      doPriceUpdates(asins);
    }
  });
}

function doPriceUpdates() {
  Item.updateItemPrice(asins[i], (err, msg) => {
    if(err) console.log(err);
    if(msg) console.log(msg);
    i++;
    if(i < limit) {
      setTimeout(doPriceUpdates, 1500)
    } else {
      setTimeout(updateItemPrices, 1500);
    }
  });
}

module.exports.updateItemPrices = updateItemPrices;
