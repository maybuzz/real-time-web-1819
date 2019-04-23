'use strict'

const path = require('path')
const ejs = require('ejs')
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const TwitterStreamChannels = require('twitter-stream-channels');
var credentials = require('./config');
const port = process.env.PORT || 1999

require('dotenv').config()

app
	.use(express.static(path.join(__dirname, 'static')))
	.use(express.urlencoded({ extended: true }))
	.use(express.json())
	.set('view engine', 'ejs')
	.set('views', path.join(__dirname, 'views'))
	.get('/', index)

const client = new TwitterStreamChannels(credentials)

const channels = {
    "moreTrees" : ['#trump', '#extinctionrebellion','#climatestrike','#schoolstrike4climate','#youthforclimate','#fridaysforfuture'],
    "lessTrees" : ['#nutella','#oreo','#mcdonalds','#burgerking', '#starbucks'],
    "morePlastic" : ['#nestle','#cocacola','#pepsi','#danone','#unilever'],
    "lessPlastic" : ['#plasticpollution','#stopplasticpollution'],
    "lessTrash" : ['#trashtag','#trashchallenge','#30daysofpickinguplitter'],
}

const stream = client.streamChannels({ track:channels })

const addingTrees = {
  name: 'moreTrees',
  initialHashtag: ["#extinctionrebellion", "#climatestrike", "#schoolstrike4climate", "#youthforclimate", "#fridaysforfuture"],
  tweets: [],
  count: 0
}

const removingTrees = {
  name: 'lessTrees',
  initialHashtag: ["#nutella", "#oreo", "#mcdonalds", "#burgerking", "#starbucks"],
  tweets: [],
  count: 0
}

const addingPlastic = {
  name: 'morePlastic',
  initialHashtag: ["#nestle", "#cocacola", "#pepsi", "#danone", "#unilever"],
  tweets: [],
  count: 0
}

const removingPlastic = {
  name: 'lessPlastic',
  initialHashtag: ["#plasticpollution", "#stopplasticpollution"],
  tweets: [],
  count: 0
}

const removingTrash = {
  name: 'lessTrash',
  initialHashtag: ["#trashtag", "#trashchallenge", "#30daysofpickinguplitter"],
  tweets: [],
  count: 0
}

stream.on('channels/moreTrees',function(tweet){
  addingTrees.tweets.push(tweet.text)
  addingTrees.count ++
  addTree(addingTrees.count)
  console.log('>moreTrees', addingTrees)
})

stream.on('channels/lessTrees',function(tweet){
  removingTrees.tweets.push(tweet.text)
  removingTrees.count ++
  removeTree(removingTrees.count)
  console.log('>lessTrees', removingTrees)
})

stream.on('channels/morePlastic',function(tweet){
  addingPlastic.tweets.push(tweet.text)
  addingPlastic.count ++
  addPlastic(addingPlastic.count)
  console.log('>morePlastic', addingPlastic)
})

stream.on('channels/lessPlastic',function(tweet){
  removingPlastic.tweets.push(tweet.text)
  removingPlastic.count ++
  removePlastic(removingPlastic.count)
  console.log('>lessPlastic', removingPlastic)
})

stream.on('channels/lessTrash',function(tweet){
  removingTrash.tweets.push(tweet.text)
  removingTrash.count ++
  removeTrash(removingTrash.count)
  console.log('>lessTrash', removingTrash)
})

function index(req, res) {
	res.render('index')
}

function addTree() {
  console.log("add tree");
}

function removeTree() {
  console.log("remove tree");
}

function addPlastic() {
  console.log("add plastic");
}

function removePlastic() {
  console.log("remove plastic");
}

function removeTrash() {
  console.log("remove trash");
}

http.listen(port, function() {
	console.log('listening on *:' + port)
})

// const myData = [
//   {
//     name: 'moreTrees',
//     initialHashtag: ["#trump", "#extinctionrebellion", "#climatestrike", "#schoolstrike4climate", "#youthforclimate", "#fridaysforfuture"],
//     tweets: [],
//     count: 0
//   },
//   {
//     name: 'lessTrees',
//     initialHashtag: ["#nutella", "#oreo", "#mcdonalds", "#burgerking", "#starbucks"],
//     tweets: [],
//     count: 0
//   },
//   {
//     name: 'morePlastic',
//     initialHashtag: ["#nestle", "#cocacola", "#pepsi", "#danone", "#unilever"],
//     tweets: [],
//     count: 0
//   },
//   {
//     name: 'lessPlastic',
//     initialHashtag: ["#plasticpollution", "#stopplasticpollution"],
//     tweets: [],
//     count: 0
//   },
//   {
//     name: 'lessTrash',
//     initialHashtag: ["#trashtag", "#trashchallenge", "#30daysofpickinguplitter"],
//     tweets: [],
//     count: 0
//   }
// ]
