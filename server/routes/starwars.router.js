const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const starwarsSchema = require('../modules/starwars.schema');

let Starwars = mongoose.model('Starwars', starwarsSchema);


/* GET REQUESTS */









/* POST REQUESTS */

router.post('/', (req, res) => {
    let addFavorite = new Starwars(req.body);

    addFavorite.save((error, saved) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });

}); // end post route







/* PUT REQUESTS */









/* DELETE REQUESTS */






  




/* MISC FUNCTIONS (If any) */







module.exports = router;