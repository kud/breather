/**
 * Breather
 */

// import
var ProgressBar = require("progress")
  , http = require("http")
  , settings = require("./config/settings.json")
  , weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q="
  , parseWeather = require("./lib/parse-weather.js")
  , i18n = require("./i18n/" + (settings.lang || "en"))
  , growl = require('growl')
  , pre = require("./tasks/pre.js")
  , post = require("./tasks/post.js")

// variables
var duration = parseFloat( settings.duration ) // in minute
  , bar

// display
console.log("\n" + new Date())
console.log("  ____                 _   _               ")
console.log(" | __ ) _ __ ___  __ _| |_| |__   ___ _ __ ")
console.log(" |  _ \\| '__/ _ \\/ _` | __| '_ \\ / _ \\ '__|")
console.log(" | |_) | | |  __/ (_| | |_| | | |  __/ |   ")
console.log(" |____/|_|  \\___|\\__,_|\\__|_| |_|\\___|_|   ")

console.log("\n..." + i18n.workMessage + "\n")

// init bar
bar = new ProgressBar(i18n.progressBar, {
    total: duration * 60
  , width: 30
  , complete: "●"
  , incomplete: " "
})

bar.tick( 0 )

pre()

// clock
setTimeout( clock, 1000 )

function clock() {
  bar.update()

  if ( !bar.complete ) return setTimeout( clock, 1000 )

  post()

  growl( i18n.breakNotification, {title : i18n.title})

  if( settings.location ) {
    checkWeather()
  }

  console.log("\n> " + i18n.breakNotification)
}

// weather
function checkWeather(){
  http.get(weatherAPI + settings.location, function( response ) {
    var json = ""
    response.on("data", function( c ) {
      json += c
    })
    response.on("end", function() {
      setTimeout(function() {
        var messsage = parseWeather( JSON.parse( json ) )

        growl( messsage, {title : i18n.title})

        console.log("\n> " + messsage)

      }, 6000)
    })
  })
}
