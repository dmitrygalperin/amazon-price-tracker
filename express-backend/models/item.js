const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const amazon = require('amazon-product-api');
const awsConfig = require('../config/aws');
const util = require('util');
const rename = require('deep-rename-keys');

// User Schema
const ItemSchema = mongoose.Schema({
  asin: String,
  date: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
  detailPageURL: String,
  images: Object,
  listPrice: Number,
  salePrice: {
    price: {type: Number},
    date: {type: Date, default: Date.now}
  },
  title: String,
  previousPrices: [
    {
      price: Number,
      date: Date
    }
  ],
  fullInfo: Object
});

const Item = module.exports = mongoose.model('Item', ItemSchema);

module.exports.getItemById = function(id, callback) {
	Item.findById(id, callback);
}

module.exports.getItemByAsin = function(asin, callback) {
	const query = {asin: asin};
	Item.findOne(query, callback);
}

module.exports.addItem = function(newItem, callback){
  if(this.getItemByAsin(newItem.asin)) return callback;
  newItem.save(callback);
}

module.exports.getItemData = function(asin, callback) {
  var client = amazon.createClient({
    awsId: awsConfig.awsId,
    awsSecret: awsConfig.awsSecret,
    awsTag: awsConfig.awsTag
  });

  client.itemLookup({
    idType: 'ASIN',
    itemId: asin,
    responseGroup: 'ItemAttributes,Images,OfferFull'
  }, callback);

}

module.exports.getAllItems = function(callback) {
  Item.find({}, callback)
}

module.exports.renameAmazonResponseKeys = function(amazonResponse) {
  return rename(amazonResponse, function(key) {
    if (key === '$') return 'S';
    return key;
  });
}

module.exports.updateItemPrice = function(asin, callback) {
  this.getItemByAsin(asin, (err, item) => {
    if (err) console.log(util.inspect(err, {showHidden: false, depth: null}));
    if(item) {
      this.getItemData(asin, (err, results, response) => {
        if(err) console.log(util.inspect(err, {showHidden: false, depth: null}));
        if(results) {
          //item.listPrice = results[0].ItemAttributes[0].ListPrice[0].Amount[0];
          item.fullInfo = this.renameAmazonResponseKeys(results[0]);
          var newPrice = parseInt(results[0].OfferSummary[0].LowestNewPrice[0].Amount[0]);
          var oldPrice = item.salePrice;
          if(newPrice != oldPrice.price) {
            item.previousPrices.push(oldPrice);
            item.salePrice = {price: newPrice, date: Date.now()};
          }
          item.lastUpdated = Date.now();
          item.save(callback(null, asin + ' updated successfully. Old price: ' + oldPrice.price + " New price: " + newPrice));
        }
      });
    }
  })
}
