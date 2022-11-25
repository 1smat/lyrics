const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const songs = require('./songs/songs')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({ extended: true }))
// Add this line to serve our index.html page
app.use(express.static('public'))

app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload())

app.get('/', (req, res) => {
    res.send('hello')
})
app.get('/songs', (req, res) => {
    res.send(songs)
})
app.get('/singleSong', (req, res) => {
    console.log(req.body)
})

app.get('/upload/:image', (req, res) => {
    res.sendFile(__dirname + '/upload/' + req.params.image)
})
app.post('/add', (req, res) => {
    const { image } = req.files
    if (!image) return res.sendStatus(400)
    image.mv(__dirname + '/upload/' + image.name)

    req.body.image = `http://localhost:8080` + '/upload/' + image.name
    console.log(req.body)
    songs.push(req.body)
    res.send('qoshildi')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}...`)
})
