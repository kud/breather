/**
 * Breather
 */

// import
var notifier = require( 'node-notifier' )
  , ProgressBar = require('progress')
  , settings = require('./settings.json')

// variables
var duration = settings.duration // in minute
  , bar
  , title = 'Breather'
  , message = 'Time to take a breath. Take a cup of tea and relax. 😌'

// display
console.log('\n' + new Date())
console.log("  ____                 _   _               ")
console.log(" | __ ) _ __ ___  __ _| |_| |__   ___ _ __ ")
console.log(" |  _ \\| '__/ _ \\/ _` | __| '_ \\ / _ \\ '__|")
console.log(" | |_) | | |  __/ (_| | |_| | | |  __/ |   ")
console.log(" |____/|_|  \\___|\\__,_|\\__|_| |_|\\___|_|   ")

console.log("\n...but it's time to work for the moment. 👷\n")

// init bar
bar = new ProgressBar('Time remaining before break: [:bar] :percent', {
    total: duration * 60
  , width: 30
  , complete: '●'
  , incomplete: ' '
})

bar.tick(0)

// clock
setTimeout(clock, 1000)

function clock(){
  bar.update()

  if ( !bar.complete ) return setTimeout(clock, 1000)
  
  notifier.notify({
    title: title,
    message: message
  })

  console.log('\n>' + message)
}
