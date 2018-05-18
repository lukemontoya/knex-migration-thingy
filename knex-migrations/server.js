const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
app.use(bodyParser.json());

app.use((req, res)=>{
  res.sendStatus(404);
})

app.listen(port, function() {
  console.log('Listening on', port);
});
