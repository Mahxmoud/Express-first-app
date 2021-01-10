const express = require('express')
const app = express()

app.use(express.static("views"))
app.use(express.static("/"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/views/services.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html')
})

app.listen(3000)