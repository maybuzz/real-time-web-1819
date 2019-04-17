'use strict'

const path = require('path')
const Twit = require('twit')
const ejs = require('ejs')
const express = require('express')
const app = express()
const port = process.env.PORT || 1999

require('dotenv').config()

var T = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
})

app
	.use(express.static(path.join(__dirname, 'static')))
	.use(express.urlencoded({ extended: true }))
	.use(express.json())
	.set('view engine', 'ejs')
	.set('views', path.join(__dirname, 'views'))
	.get('/', index)
  .listen(process.env.PORT || 2222)

function index(req, res) {
	res.render('index')
}

// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
//   console.log(data)
// })

var channels = {
	"weed" : ['420','weed','stoned','marijuana','haze', 'lemonhaze'],
	"negative" : ['facism','racism','nazi','hitler'],
	"positive" : ['javascript','nodejs','html5','css','angularjs']
}

var stream = client.streamChannels({ track: channels })

var weed = T.stream('statuses/filter', { track: ['420', 'weed', 'stoned', 'stoner', 'marijuana', 'haze', 'lemonhaze'] })

var negative = T.stream('statuses/filter', { track: ['facism', 'racism', 'nazi', 'hitler'] })

stream.on('channels/weed', function (tweet) {
  console.log("weed-tweet: ", tweet)
})

stream.on('channels/negative', function (tweet) {
  console.log("negga-tweet: ", tweet)
})
