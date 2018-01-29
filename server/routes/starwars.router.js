const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const starwarsSchema = require('../modules/starwars.schema');

let Starwars = mongoose.model('Starwars', starwarsSchema);


/* GET REQUESTS */


router.get('/', (req, res) => {
    Starwars.find({}, (error, urls) => {
        if(error) {
            console.log('error on find:', error);
            res.sendStatus(500);
        } else {
            res.send(urls);
        }
    })
});


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

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Starwars.findByIdAndRemove(
        {'_id': id},
        (error, removed) => {
            if(error) {
                console.log('error on delete', error);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        });
});




  




/* MISC FUNCTIONS (If any) */







module.exports = router;