const express = require('express')
const { PrismaClient } = require('@prisma/client')
const data = require('./dummy')
const app = express()
const api = express()
const port = 3000
const prisma = new PrismaClient()
app.get('/', async (req, res) => {
    const result = await prisma.afspraken.findMany()
    res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

api.get('/', (req,res) => {
  res.send('a7la zebi')
})

api.get('/people', (req,res) => {
  res.status(200).json(data)
})


api.listen(8000, () => console.log(`API running at ${'http://localhost'}:${8000}!`))