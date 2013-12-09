var notifier = require( 'node-notifier' )
  , args = process.argv.slice(2)
  , minutes = 60

if(args.length) {
  minutes = parseFloat(args[0])
}

var time = minutes * 60 * 1000

setTimeout( function() {
  notifier.notify({
    title: 'Break! Break! Break!',
    message: 'Time to take a break, mate. \nTake a cup of tea and relax. 🍵'
  })
}, time )
