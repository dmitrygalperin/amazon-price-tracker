const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Item = require('../models/item');
const User = require('../models/user');

//New Item
router.post('/new', (req, res, next) => {
  const asin = req.body.asin;
  const userId = req.body.userId;

  Item.getItemData(asin, (err, results, response) => {
      if (err) {
        return res.json({success: false, msg: 'Failed to add item'})
      }

      //mongo doesn't like keys with names of '$', so converting to 'S' for now
      if(results) {
        var formattedResults = Item.renameAmazonResponseKeys(results[0]);

        //stupid way of catching invalid item pages (e.g. if user didn't select a size or color)
        try {
          results[0].ImageSets[0].ImageSet[0].ThumbnailImage[0].URL[0];
          results[0].ItemAttributes[0].ListPrice[0].Amount[0];
        } catch (err) {
          return res.json({success: false, msg: 'Could not get item details.'});
        }

        let newItem = new Item({
          asin: results[0].ASIN[0],
          detailPageURL: results[0].DetailPageURL[0],
          imageSet: results[0].ImageSets[0].ImageSet[0],
          images: {
            thumbnailURL: results[0].ImageSets[0].ImageSet[0].ThumbnailImage[0].URL[0],
            smallImageURL: results[0].ImageSets[0].ImageSet[0].SmallImage[0].URL[0],
            mediumImageURL: results[0].ImageSets[0].ImageSet[0].MediumImage[0].URL[0],
            largeImageURL: results[0].ImageSets[0].ImageSet[0].LargeImage[0].URL[0]
          },
          listPrice: results[0].ItemAttributes[0].ListPrice[0].Amount[0],
          salePrice: {price: results[0].OfferSummary[0].LowestNewPrice[0].Amount[0], date: Date.now()},
          title: results[0].ItemAttributes[0].Title[0],
          fullInfo: formattedResults
        });

        Item.addItem(newItem, (err, item) => {
          if(err) {
            console.log(err);
            return res.json({success: false, msg: 'Failed to save item data.'});
          }
          if(item) {
            if(userId) {
              User.addToTrackedItems(asin, userId, (err, msg) => {
                if(err) return res.json({success: false, msg: err});
                return res.json({success: true, msg: 'Item successfully added and tracked', item: newItem});
              });
            } else {
              return res.json({success: true, msg: 'Item added successfully'})
            };
          }
        });
      }
  });

});

router.post('/remove', (req, res, next) => {
  User.removeTrackedItem(req.body.asin, req.body.userId, (err) => {
    if (err) return res.json({success: false, msg: 'Error removing item.'});
    return res.json({success: true, msg: 'Item successfully removed.'});
  });
});

router.post('/update', (req, res, next) => {
  Item.updateItemPrice(req.body.asin, (err, msg) => {
    if(err) return res.json({success: false, msg: err});
    if(msg) return res.json({success: true, msg: msg});
  })
});

router.post('/get', (req, res, next) => {
  console.log(req.body.asin);
  Item.getItemByAsin(req.body.asin, (err, item) => {
    if (err) return res.json({success: false, msg: err});
    if(item) return res.json({success: true, itemData: item});
    else return res.json({success: false, msg: "Item not found."});
  })
})


module.exports = router;
