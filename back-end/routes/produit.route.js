const express = require('express');
const app = express();
const produitRoute = express.Router();

// Produit model
let Produit = require('../models/Produit');

// Add Produit
produitRoute.route('/create').post((req, res, next) => {
    Produit.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Produits
produitRoute.route('/').get((req, res) => {
    Produit.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Produit
produitRoute.route('/read/:id').get((req, res) => {
    Produit.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update produit
produitRoute.route('/update/:id').put((req, res, next) => {
    Produit.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Produit
produitRoute.route('/delete/:id').delete((req, res, next) => {
    Produit.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = produitRoute;