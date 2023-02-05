/** @format */

const { Router } = require('express')

const router = Router()

router.get('/groceries', (req, res) => {
	res.send(groceryList)
})

router.get('/groceries/:item', (req, res) => {
	const { item } = req.params
	const groceryItem = groceryList.find((g) => {
		return g.item === item
	})
	res.send(groceryItem)
})
router.post('groceries', (req, res) => {
	console.log(req.body)
	groceryList.push(req.body)
	res.send(201)
})
