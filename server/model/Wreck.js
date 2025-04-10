// model/Wreck.js
import mongoose from 'mongoose';

const WreckSchema = new mongoose.Schema({
  feature_type: String,
  chart: String,
  latdec: Number,
  londec: Number,
  depth: Number,
  coordinates: {
    type: [Number], // [longitude, latitude]
    index: '2dsphere'
  }
});

// Export as default
const Wreck = mongoose.model('Wreck', WreckSchema, 'shipwrecks');
export default Wreck;
