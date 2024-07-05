const express = require('express');
const cors = require('cors');
const PORT = require('./config/config');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


/* rotues & routes */
const routes = require('./routes/rotue');
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    
})