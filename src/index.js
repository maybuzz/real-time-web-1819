'use strict'

const path = require('path')
const ejs = require('ejs')
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 1999

app
	.use(express.static(path.join(__dirname, 'static')))
	.set('view engine', 'ejs')
	.set('views', path.join(__dirname, 'views'))
	.get('/', index)

io.on('connection', function(socket) {
	console.log('a user connected')

	socket.on('chat message', function(msg) {
		console.log('message: ' + msg)
	})

	socket.on('chat message', function(msg) {
		io.emit('chat message', msg)
	})

	socket.on('disconnect', function() {
		console.log('user disconnected')
	})
})

function index(req, res) {
	res.render('index.ejs')
}

http.listen(port, function() {
	console.log('listening on *:' + port)
})
