/** @format */

const express = require('express')
const app = express()

const PORT = 3000
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}...`)
})

app.get('/groceries', (req, res) => {
  res.send([
    {
      item:'milk',
      quantity:3
    },
    {
      item:'cereal',
      quantity:2
    },
    {
      item:'pop-tarts',
      quantity:1
    }
  ])
})
