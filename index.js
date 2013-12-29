/**
 * Breather
 */
// import
var ProgressBar = require("progress")
  , http = require("http")
  , settings = require("./config/settings.json")
  , weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q="
  , parseWeather = require("./lib/parse-weather.js")
  , i18n = require("./i18n/" + ( settings.lang || "en" ) )
  , pre = require("./tasks/pre.js")
  , post = require("./tasks/post.js")
  , growl = require("growl")
  , readline = require("readline")
  , fs = require("fs")

// functions
// weather
function checkWeather() {
  http.get( weatherAPI + settings.location, function( response ) {
    var json = ""
    response.on("data", function( c ) {
      json += c
    })
    response.on("end", function() {
      setTimeout(function() {
        var message = parseWeather( JSON.parse( json ) )

        growl( message, {title : i18n.title} )

        console.log("\n> " + message)

      }, 6000)
    })
  })
}

// clock
function clock() {
  bar.update()

  if ( !bar.complete ) return setTimeout( clock, 1000 )

  post()

  growl( i18n.breakNotification, {title : i18n.title} )

  // if( settings.location ) {
  //   checkWeather()
  // }

  console.log("\n> " + i18n.breakNotification)

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question("\n" + i18n.anotherSessionQuestion + " (Y/time/n) ", function( answer ) {
    var intAnswer = parseInt( answer, 10 )

    if ( !isNaN( intAnswer ) ) {
      settings.duration = intAnswer

      fs.writeFile("./config/settings.json", JSON.stringify( settings, null, 2 ), function ( err ) {
        if (err) throw err
      })
    }

    if ( answer !== "n" && answer !== "N" ) {
      programme()
    }
    else {
      console.log( "\n" + i18n.byeBye)
    }

    rl.close()
  })

}

// intro
function intro() {
  console.log("\n" + new Date())
  console.log("  ____                 _   _               ")
  console.log(" | __ ) _ __ ___  __ _| |_| |__   ___ _ __ ")
  console.log(" |  _ \\| '__/ _ \\/ _` | __| '_ \\ / _ \\ '__|")
  console.log(" | |_) | | |  __/ (_| | |_| | | |  __/ |   ")
  console.log(" |____/|_|  \\___|\\__,_|\\__|_| |_|\\___|_|   ")

  console.log("\n..." + i18n.workMessage)
}

// programme
function programme() {
  duration = parseFloat( settings.duration )

  // init bar
  bar = new ProgressBar(i18n.progressBar, {
      total: duration * 60
    , width: 30
    , complete: "●"
    , incomplete: " "
  })

  // start progress bar
  console.log()
  bar.tick( 0 )

  // start pre-tasks
  pre()

  // start process
  setTimeout( clock, 1000 )
}

// variables
var duration
  , bar
  , rl

// start the generique!
intro()

// here we go.
programme()


