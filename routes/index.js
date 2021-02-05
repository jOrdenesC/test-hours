const express = require('express');
const router = express.Router();
const moment = require('moment')

const hours = [];
const motorcycles = [];

for (let hour = 8; hour <= 20; hour++) {
    hours.push(moment({ hour }).format('h:mm A'));
    hours.push(
        moment({
            hour,
            minute: 30
        }).format('h:mm A')
    );
}

for (let motorcycle = 1; motorcycle <= 8; motorcycle++) {
    motorcycles.push({
        "name": "Motociclista " + motorcycle,
        "status": false
    })
}


router.get('/', async (req, res) => {
    res.render('home', { hours, motorcycles })
});

router.post('/changeStatus', async (req, res) => {
    motorcycles.forEach(function (el, index) {
        if (el.name = req.name) {
            motorcycles["status"] = !motorcycles["status"];
        }
    })
    res.redirect('/')
});

module.exports = router;