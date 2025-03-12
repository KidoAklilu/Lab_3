const express = require('express');
const app = express();
const homeRoutes = require('./routes/homeRoutes');

app.set('view engine', 'ejs');

app.use('/', homeRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
