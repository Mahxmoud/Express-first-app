const express = require('express')
const app = express()


app.use(express.static("views"))
app.use(express.static("/"))


const date = Date().split(' ')
const currentDay = date[0]
const currentTime = Number(date[4].split(':')[0])

if (currentDay == ('Sat' || 'Sun') && (currentTime >= 9 && currentTime <= 17)) {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/views/home.html')
    })
    app.get('/services', (req, res) => {
        res.sendFile(__dirname + '/views/services.html')
    })
    app.get('/contact', (req, res) => {
        res.sendFile(__dirname + '/views/contact.html')
    })
}
else {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/views/NotAvailable.html')
    })
}





app.listen(3000)