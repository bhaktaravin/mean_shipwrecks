const express = require('express'); 
const router = express.Router(); 
const Shipwreck = require('../model/coordinates');


router.get('/', async (req,res) => {
    try {
        const shipwrecks = await Shipwreck.find(); 
        res.json(shipwrecks);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async(req, res) => {
    const shipwreck = new Shipwreck({
        recrd: req.body.recrd,
        vesselterms: req.body.vesselterms,
        chart: req.body.chart,
        feature_type: req.body.feature_type,
        latdec: req.body.latdec,
        lngdec: req.body.lngdec,
        gp_quality: req.body.gp_quality,
        depth: req.body.depth,
        coordinates: req.body.coordinates
    });
    try {
        const newShipwreck = await shipwreck.save();
        res.status(201).json(newShipwreck);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;