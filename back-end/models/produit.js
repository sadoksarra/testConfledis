const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Produit = new Schema({
   nom: {
      type: String
   },
   prix_unitaire: {
      type: Number
   },
   quantite: {
      type: Number
   },
   
},
 {
   collection: 'produits'
 }
)

module.exports = mongoose.model('Produit', Produit)