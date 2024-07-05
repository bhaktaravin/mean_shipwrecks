const dotenv = require('dotenv'); 

dotenv.config({ path: './.env' });

const mongoose = require('mongoose'); 

const PORT = process.env.PORT || 3000;

const options ={
    useUnifiedTopology: true
}

const url = 'mongodb+srv://root:GftJKZ2rlsJlk9DR@cluster0.6rjyw.mongodb.net/sample_geospatial?authSource=admin&replicaSet=atlas-l540kb-shard-0&readPreference=primary&ssl=true';

console.log(url);


mongoose.connect(url, options)
.then(() => {
    console.log('MongoDB connected')
}).catch(err => console.log(err));

module.exports = PORT