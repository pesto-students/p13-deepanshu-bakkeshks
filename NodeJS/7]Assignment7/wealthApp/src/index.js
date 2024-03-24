const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/db');
const assetRoutes = require('./routes/assetRoutes');
const financeRoutes = require('./routes/financeRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', assetRoutes);
app.use('/api', financeRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
