const mongoose = require('mongoose'); 



const shipwreckSchema = new mongoose.Schema({
    recrd: {
        type: String,
        required: true
    },
    vesselterms: {
        type: String,
        required: true
    },
    feature_type: {
        type: String,
        required: true
    },
    chart:{
        type: String,
        required: true
    },
    latdec: {
        type: Number,
        required: true
    },
    lngdec: {
        type: Number,
        required: true
    },
    gp_quality:{
        type: String,
    
    },
    depth: {
        type: Number
    },
    sounding_type:{
        type: String
    },
    history:{
        type: String
    },
    quasou:{
        type: String,

    },
    watlev:{
        type: String
    },
    coordinates:{
        type: [Number],
        required: true
    }
});

const Shipwreck = mongoose.model('shipwreck', shipwreckSchema);
module.exports = Shipwreck;