const express = require('express');
const app = express();
const port = 7000;

//Importing routes index.js to access different routes
app.use('/', require('./routes/index')); 







// Listening on port 7000
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});