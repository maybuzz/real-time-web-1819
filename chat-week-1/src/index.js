'use strict'

const path = require('path')
const ejs = require('ejs')
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const fs = require('fs');
const port = process.env.PORT || 1999

app
	.use(express.static(path.join(__dirname, 'static')))
	.use(express.urlencoded({ extended: true }))
	.use(express.json())
	.set('view engine', 'ejs')
	.set('views', path.join(__dirname, 'views'))
	.get('/', index)

const letterCount = {
	a: 0,
	b: 0,
	c: 0,
	d: 0,
	e: 0,
	f: 0,
	g: 0,
	h: 0,
	i: 0,
	j: 0,
	k: 0,
	l: 0,
	m: 0,
	n: 0,
	o: 0,
	p: 0,
	q: 0,
	r: 0,
	s: 0,
	t: 0,
	u: 0,
	v: 0,
	w: 0,
	x: 0,
	y: 0,
	z: 0
}

io.on('connection', function(socket) {
	console.log('user connected ' + '(' + socket.id + ')')

	socket.on('chat message', function(msg) {
		const chars = msg
      .replace(/[.,?!;()"'-]/g, "")
      .replace(/ /g, "")
      .toLowerCase()
			.split("")

		chars.forEach(char => {
			if (letterCount[char] === undefined) {
				return false
			}
			letterCount[char]++
		})

    io.emit('chat message', {message: msg, count: letterCount})
	})

	socket.on('disconnect', function() {
		console.log('user disconnected ' + '(' + socket.id + ')')
	})
})

function index(req, res) {
	res.render('index')
}

http.listen(port, function() {
	console.log('listening on *:' + port)
})
