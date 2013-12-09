var notifier = require( 'node-notifier' )
  , ProgressBar = require('progress')

console.log('\n> Working time! 👷\n')

var bar = new ProgressBar('Time remaining before break: [:bar] :percent', {
    total: 60
  , width: 30
  , complete: '●'
  , incomplete: ' '
})

bar.tick(0)

var timer = setInterval(function(){

  if ( bar.complete ) {
    notifier.notify({
      title: 'Break! Break! Break!',
      message: 'Time to take a break, mate. Take a cup of tea and relax. 🍵'
    })
    clearInterval( timer )
  }
  else {
    bar.tick()
  }

}, 60 * 1000)
