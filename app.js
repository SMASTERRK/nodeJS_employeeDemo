const express = require('express');

const app = express();
app.set('view engine', 'ejs');

const PORT_NO = process.env.PORT || 3000;

//setting up routes
require('./routes')(app);

app.listen(PORT_NO, function() {
    console.log('Server listening on port no ')
});