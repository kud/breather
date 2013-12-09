var notifier = require( 'node-notifier' )

var time = 60 * 60 * 1000

setTimeout( function() {
  notifier.notify({
    title: 'Break break break!',
    message: 'Time to take a break, mate. Take a cup of tea and relax. 🍵'
  })
}, time )
