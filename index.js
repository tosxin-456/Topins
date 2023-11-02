
require('dotenv').config;
const express = require('express');
const port = process.env.PORT || 36004
const app = express();

app.listen(port,()=>{
  console.log(`port running @ ${port}`)
})
