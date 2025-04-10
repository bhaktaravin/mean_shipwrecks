import express from 'express';
const router = express.Router();

import Wreck from '../model/Wreck.js';


router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from the API' });
});


router.get('/properties', async(req, res) => {
    const data = await Wreck.find();
    res.json(data);
});

router.get('/near', async(req, res) => {
    const data = await Wreck.find({
        coordinates: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [req.query.lon, req.query.lat]
                }
            }
        }
    });
    res.status(200).json(data);
});

export default router;