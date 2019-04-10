(function() {
	var socket = io()

	document.querySelector('form').addEventListener('submit', function(e) {
		e.preventDefault()
		socket.emit('chat message', document.querySelector('#m').value)
		document.querySelector('#m').value = ''
		return false
	})

	socket.on('chat message', function(msg) {
		var newLi = document.createElement('li')
		newLi.textContent = msg
		document.querySelector('#messages').append(newLi)
	})
})()
