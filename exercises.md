# Table of contents

- [Exercises Week 1](#Exercises-Week-1)
- [Exercises Week 2](#Exercises-Week-2)
- [Exercises Week 3](#Exercises-Week-3)

---

# Exercises Week 1

Real-Time Web - Minor Web Development

## Intention

After all you learned so far, you now will learn how to build real-time applications, and rule the world!

## Exercises

1. [Basic setup][exercise1]
2. [A unique chat app ][exercise2]
3. [Deploy your app][exercise3]

### Exercise 1: Basic setup

#### Readme (Thursday)

[Fork this repo][repo]
This week you’re going to recreate [this basic chat app][socket.io chat] with the addition of at least one new feature. Write down what your project’s all about in the readme of the project. Next week you’ll start a new project so a basic readme for this week will do.

_Resources:_ [readme driven development][rdd], [mastering markdown][markdown]
_Note:_ keep the docs up-to-date while working on your project.

#### Style (Thursday)

Maybe you already have a preferred code-style, maybe you want to try something else.
Set up at least an [npm script][npm], and probably also some integration with your editor. Use Nodemon or similar to allow instant reloading while developing.

_Resources:_ [xo], [standard], [prettier], [eslint]

#### Server (Thursday)

Set-up Express (or similar) for static file serving / templating

**Resources:** [express api]

### Exercise 2: A unique chat app

Set-up socket.io. Create a basic real-time app using sockets. Bare minimum is a successful message from client to server and from server to client (“round trip”) as well as one additional chat feature YOU HAVE COME UP WITH. Here is an [example][example razpudding] I made that slowly fades out words commonly used by the people writing the chat messages forcing them to use new words.
Creating a unique feature often means storing some information about users serverside in-memory. Ask us if you have any questions about how to achieve that.

[Examples that are not unique][get started]: Storing nicknames, showing who’s online or any of the other feature requests listed at the bottom of the socket.io tutorial.

Examples that are unique: Using D3 to structure texts into svg art, using words to fight each other in a text based game, additional features you can earn if you stay in chat long enough.
**It doesn’t even have to be a chat app, just use the socket.io framework.**

Think of something that matches your skill level. If you have trouble understanding the basics of socket.io, focus on the basics (and talk to us if you need help).

Extra challenge: Instead of socket.io, use the native [server-sent-events][sse]! It works very well although sending messages from client to server is trickier.

**Resources:** [socket.io]

### Exercise 3: Deploy your app

Get your app running on the web! Put a link to your live demo at the top of your readme. Include a screenshot in the repo showing of the unique feature you built.

**Resources:** [now], [heroku], [digitalocean].  
**Note:** Don’t 😱 if this doesn’t work out this week: there’s plenty time to do it in week 2 or week 3. But it may be advantageous if you get around to deploying now

[exercise1]: https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-1.md#exersise-1-basic-setup
[exercise2]: https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-1.md#exercise-2-a-unique-chat-app
[exercise3]: https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-1.md#exercise-3-deploy-your-app
[repo]: https://github.com/cmda-minor-web/real-time-web-1819
[socket.io]: https://socket.io/
[socket.io chat]: https://socket.io/demos/chat/
[npm]: https://docs.npmjs.com/cli/run-script
[rdd]: http://tom.preston-werner.com/2010/08/23/readme-driven-development.html
[markdown]: https://guides.github.com/features/mastering-markdown/
[xo]: https://github.com/xojs/xo
[standard]: https://github.com/standard/standard
[prettier]: https://github.com/prettier/prettier
[eslint]: https://github.com/eslint/eslint
[express api]: https://expressjs.com/en/4x/api.html
[example razpudding]: https://github.com/Razpudding/socketio-chat-app
[get started]: https://socket.io/get-started/chat/
[sse]: https://www.voorhoede.nl/en/blog/real-time-communication-with-server-sent-events/
[now]: https://zeit.co/now
[heroku]: https://www.heroku.com/
[digitalocean]: https://www.digitalocean.com/

---

# Exercises Week 2

Real-Time Web - Minor Web Development

## Intention

Last week you built a basic socket web app. The purpose was to learn about real-time communication using websockets. This week you’re going to take it to the next level and build a **meaningful** webapp that consumes an external source. you will learn how to store and serve data from an external source to your own clients. We'll work on this app for the last two weeks of the course.

### Result

- Learn how to consume an external data source
- Reflect data in your frontend
- Store data in a database
- Show off your unique work 🤩

## Exercises

1. [Come up with a concept and data][exercise1]
2. [Reflect data in the frontend][exercise2]

### Exersise 1: Come up with a concept and data

You can start either by thinking of a useful real-time application and then finding a matching API; or by looking at existing real-time APIs and finding meaningful real-time uses for them.
You could, for instance, use an API that tracks the number of crypto currency transactions globally and estimate their CO2 impact (per currency, per transaction).
Or, you might use Amsterdam's [real-time open trash API][trash] to figure out which neighbourhoods produce the most (plastic) trash.
You could even track a trend on twitter to show the status of an important development like the recent [#trashtag event][trashtag]

**Your external data source should be real-time (like a twitter feed).** If you want to build an app that uses a data source that can't be consumed in real-time (or by polling external data that changes regularly) there is an alternative. Create an app where you use a non real-time external source but where your users can manipulate the data model on your server in real time. Like this [drawing] app made by Fenna de Wilde last year or this [game] made by Mees Rutten. If you don't use a real-time external data source, Check with a teacher if your concept is sufficient to pass the course.

Pick a data source and define what you want to do. You can find a real-time source yourself (be weary of OAuth, poor documentation, strict rate limits etc.) or pick one from this [list]. If you find outdated information in the list, please update it 🙏🏼.
Outline your concept in the readme; describe the API you intend to use, including it’s properties (rate-limit, authorization method, API methods, etc.)

**Examples:** [slack], [github], [twitter], [npm]

### Exercise 2: Reflect data in the frontend

Reflect some of the data from the external source in a frontend view. The first step is to have your server consume data from the external source. Then you'll want to send that data to user. Finally, the frontend should deal with the data and show some HTML content.

Now that you have a one way trip (external source -> your server -> frontend) set up, you can work on a way for your user to change the data on the server using sockets.

**Resources:** [socket.io], [d3]

[exercise1]: https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#exersise-1-pick-a-real-time-source
[exercise2]: https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#exercise-2-reflect-data
[slack]: https://api.slack.com/rtm
[github]: https://developer.github.com/v3/
[twitter]: https://developer.twitter.com/en/docs
[npm]: https://github.com/npm/registry-follower-tutorial
[socket.io]: https://socket.io/
[d3]: https://d3js.org/

---

# Exercises Week 3

Real-Time Web - Minor Web Development

## Intention

Last week you built a basic socket web app. The purpose was to learn about real-time communication using websockets. This week you’re going to take it to the next level and build a **meaningful** webapp that consumes an external source. you will learn how to store and serve data from an external source to your own clients. We'll work on this app for the last two weeks of the course.

## Excercises

1. [Hook up a database][exercise1]
2. [Test your app][exercise2]

### Exercise 1: Hook up a database

You probably want to persist data in a database (“tunnel event”, initial load, etc.) so set up some of way of storing the data. If you want to start out simple, store the data in-memory first (like an array of data items) and move it to a database later. Describe the chosen database system in the project's readme. Make sure you only store the data you NEED for your application. This almost always involves cleaning and restructuring the data. For instance,if you get back a complex object with confusing property names, use map,filter,reduce to change the data to your own format.

**Resources:**

- Databases: [levelup], [mongo], [redis], [postgres]
- Cleaning data: [array], [string], [object]

### Exercise 2: Test your app

Make sure your app works with at least three people connected (preferably more) at the same time. They will probably need different parts of your database so you will need to set up some server-side functionality that serves a specific part of your database depending on the type or request a clients sends. These types of requests like “getLatestData” or “sendMessage” form the basis of the API of YOUR server. think about which methods/events your server will have/allow and describe them in your readme. It’s OK if not all methods work yet but try to plan ahead.

[exercise1]: https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#exersise-1-pick-a-real-time-source
[exercise2]: https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#exercise-2-reflect-data
[levelup]: https://github.com/level/levelup
[mongo]: https://www.npmjs.com/package/mongodb
[redis]: https://github.com/NodeRedis/node_redis
[postgres]: https://github.com/brianc/node-postgres
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
