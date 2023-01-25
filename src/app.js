/** @format */

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

const PORT = 3000
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}...`)
})
const groceryList = [
	{
		item: 'milk',
		quantity: 3,
	},
	{
		item: 'cereal',
		quantity: 2,
	},
	{
		item: 'pop-tarts',
		quantity: 1,
	},
]
app.get('/groceries', (req, res) => {
	console.log(groceryList)
	res.send(groceryList)
})

app.post('/groceries', (req, res) => {
	groceryList.push(req.body)
	console.log(req.body)
	res.sendStatus(201)
})
