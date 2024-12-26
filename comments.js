// create web server
const express = require('express')
const app = express()
const port = 3000

// create a route
app.get('/', (req, res) => {
  res.send('Welcome to the comments page!')
})

// start the server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})