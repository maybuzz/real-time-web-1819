# Save the earth

## Summary
An island surrounded by plastic and litter. The use of hashtags on Twitter will help clean up and/or destroy the island. Users can choose their own hashtags to manipulate the interface.

![island sketch](/img/island.png)

## Table of contents
- [Live demo](#Live-demo)
- [Install](#Install)
- [Concept](#Concept)
  - [Hashtags](#Hashtags)
- [API](#API)
- [Data](#Data)
- [To-do](#To-do)
- [Resources](#Resources)

## Live demo
`NO LIVE DEMO YET`
<!-- [Click here](...) to see my live demo. -->

## Install
To install this project you'll have to fork this repository and open your terminal

```bash
  # insert your username to this link
  # put this in your terminal to clone the repo
  git clone https://github.com/your-user-name/real-time-web-1819/
```

## Concept
This project is called "save the earth". It is connected to the Twitter API and will be manipulated by tweets of twitter users. The main focus of this app is plastic pollution and deforestation. Companies and consumers all over the world are contributing to destroying the world. This application is a data visualization of twitter behavior.

I'm using multiple hashtags to append and remove items (litter, plastic and trees) from the island. Every positive hashtag removes items, every negative hashtag appends items.

Users that play the game can choose the hashtags they want to add to the island. There are four default tags active, so the game can start. The tags added by the user only go for that specific user. So every user can have its own personal experience.

### Hashtags
The negative tags contribute to deforestation to collect palm oil to use as a ingredient, the other negative tags contribute to plastic pollution because they use plastic or aluminum packaging. The positive tags come from people who help clean up the mess.

#### Positive
- `#extinctionrebellion` -> to append trees
- `#climatestrike` -> to append trees
- `#schoolstrike4climate` -> to append trees
- `#youthforclimate` -> to append trees
- `#fridaysforfuture` -> to append trees

- `#plasticpollution` -> to remove plastic from water
- `#stopplasticpollution` -> to remove plastic from water

- `#trashtag` -> to remove plastic from land
- `#trashchallenge` -> to remove plastic from land
- `#30daysofpickinguplitter` -> to remove plastic from land

#### Negative
- `#nutella` -> to remove trees
- `#oreo` -> to remove trees
- `#mcdonalds` -> to remove trees
- `#burgerking` -> to remove trees
- `#starbucks` -> to remove trees

- `#nestle` -> to add plastic to water and land
- `#cocacola` -> to add plastic to water and land
- `#pepsi` -> to add plastic to water and land
- `#danone` -> to add plastic to water and land
- `#unilever` -> to add plastic to water and land

## API
The following code snippet show my setup for incoming tweets. I still have to work this out a lot, but I do have a connection with Twitter and I can collect multiple tags in multiple streams.

Because I'm only using words and hashtags I don't need authorization.

```js
var channels = {
	"name" : ['tag','tag','tag','tag'],
	"name" : ['tag','tag','tag']
}

stream.on('channels/name', function (tweet) {
  // code to append or remove stuff etc
})
```

## Data

## To-do
- [x] basic chat application, [week 1](https://github.com/maybuzz/real-time-web-1819/blob/master/week-1.md)
- [x] concept
- [ ] svg
  - [x] island setup
  - [x] vulcano
  - [x] water
  - [ ] trees
  - [ ] plastic
  - [ ] litter
- [x] connect to twitter api
- [x] format data
- [x] data life cycle diagram

- [ ] socket.io setup
- [ ] client `main.js`

## Resources
- [Island game inspiration](http://spele.nl/grow-island-spel/)
- [Weed svg](https://www.topsimages.com/images/weed-plant-svg-17.html)
- [Trump svg](https://900svgfile.blogspot.com/2016/04/free-donald-trump-character-with-flat.html)
- [Rocket svg](http://www.clker.com/clipart-rocket-26.html)
- [Positive words](http://positivewordsresearch.com/top-positive-words-emotions-used-these-days-on-social-media/)
- [Throwaway plastic companies](https://www.greenpeace.org/international/story/18876/these-10-companies-are-flooding-the-planet-with-throwaway-plastic/)
- [Palm oil products](https://www.worldwildlife.org/pages/which-everyday-products-contain-palm-oil)
- [Palm oil products 2](https://greenglobaltravel.com/how-to-avoid-products-with-palm-oil/#Products%20Made%20From%20Palm%20Oil%20Are%20Everywhere!)
- [The trashtag challenge](https://stayhipp.com/internet/the-trashtag-challenge/)


## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
