/** @format */

const express = require('express')
const app = express()
const groceryRoute = require('./router/groceries')

app.use(express.json())

app.use((req, res, next) => {
	console.log(`${req.method}: ${req.url}`)
	next()
})
app.use('/api/v1/groceries', groceryRoute)

const PORT = 3000
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}...`)
})
