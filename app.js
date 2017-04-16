const express = require('express');
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

const event = require('./routes/event')

app.use('/events', event)


app.listen(3000, () => {
  console.log('Live at port 3000');
})
