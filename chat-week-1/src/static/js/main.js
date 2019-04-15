(function() {
	var socket = io()

	document.querySelector('form').addEventListener('submit', function(e) {
		e.preventDefault()
		socket.emit('chat message', document.querySelector('#m').value)
		document.querySelector('#m').value = ''
		return false
	})

	const countList = document.querySelector('#chars')

	socket.on('chat message', function(msg) {
		countList.innerHTML = '';
		var newLi = document.createElement('li')
		newLi.textContent = msg.message
		document.querySelector('#messages').append(newLi)

		const entries = Object.entries(msg.count)
		entries.forEach(char => {
			const el = document.createElement('li')
			el.innerText = char[1] + ' keer ' + char[0]
			countList.appendChild(el)
		})
	})

})()

// const form = document.getElementById('form')
// const chatInput = document.getElementById("m")
// const sendBtn = document.getElementById("send")
// const messages = document.getElementById('messages')
// const countList = document.querySelector('#chars')
// const feedback = document.getElementById("feedback")
// const socket = io()
//
// sendBtn.addEventListener("click", function() {
// 	socket.emit('chat message', messages.value)
// 	document.querySelector('#m').value = ''
// 	return false
// })
//
// chatInput.addEventListener("keypress", function() {
//   socket.emit("typing", nameInput.value)
// })
//
// socket.on('chat message', function(msg) {
// 	var newLi = document.createElement('li')
// 	countList.innerHTML = ''
// 	newLi.textContent = msg.message
// 	messages.append(newLi)
//
// 	const entries = Object.entries(msg.count)
// 	entries.forEach(char => {
// 		const el = document.createElement('li')
// 		el.innerText = char[0] + ' is ' + char[1] + ' keer gebruikt'
// 		countList.appendChild(el)
// 	})
// })
//
// socket.on("typing", function(data) {
//   feedback.innerHTML = data + " is typing..."
// })
