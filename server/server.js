// server.js (or index.js)

// Import Config
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/api.js';

dotenv.config({ path: '../.env'});



// Create express app and HTTP server
const app = express();
mongoose 
.connect(process.env.DB_URL, {
    
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error(err);
});

// Import routes
app.use('/api', routes);

// Start Server
app.listen(process.env.PORT, () => {
    console.log('Server started on port ' + process.env.PORT);
});
