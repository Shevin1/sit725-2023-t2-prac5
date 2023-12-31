let collection = require('../models/dog')


function postDog(req, res) {
    dog = req.body;
    collection.postDog(dog, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, messsage: 'post success' })
        }
    });
}

function getAllDogs(req, res) {
    collection.getAllDogs((err, cards) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error occurred');
        }
        res.render('index', { cards });
    })
}


module.exports = { postDog, getAllDogs }