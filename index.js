// import
var ProgressBar    = require("progress")
var http           = require("http")
var fs             = require("fs")
var readline       = require("readline")
var globalSettings = require(process.env.HOME + "/.breather")
var settings       = globalSettings.settings
var pre            = globalSettings.pre
var post           = globalSettings.post
var weatherAPI     = "http://api.openweathermap.org/data/2.5/weather?q="
var parseWeather   = require("./lib/parse-weather.js")
var i18n           = require("./i18n/" + ( settings.lang || "en" ) )
var notifier       = require('node-notifier')
var path           = require('path')

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

        notifier.notify({
          title: i18n.title,
          message: message,
          icon: path.join(__dirname, '../resources/icon.png')
        })

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

  notifier.notify({
    title: i18n.title,
    message: i18n.breakNotification,
    icon: path.join(__dirname, '../resources/icon.png')
  })

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


