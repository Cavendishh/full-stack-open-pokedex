const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// To check if application is running and healthy
app.get('/healthcheck', (req, res) => {
  res.send('ok')
})

// Version of the app for health checks
app.get('/version', (req, res) => {
  res.send('33') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
