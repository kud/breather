var notifier = require( 'node-notifier' )
  , ProgressBar = require('progress')
  , bar
  , timer
  , start = +new Date()
  , minutes = 60
  , end = start + (minutes * 60 * 1000)
console.log('\n> Working time! 👷\n')

bar = new ProgressBar('Time remaining before break: [:bar] :percent', {
    total: minutes
  , width: 30
  , complete: '●'
  , incomplete: ' '
})

bar.tick(0)

timer = setTimeout(fn, 60 * 1000)

function fn(){
  if ( +new Date() >= end ) {
    notifier.notify({
      title: 'Break! Break! Break!',
      message: 'Time to take a break, mate. Take a cup of tea and relax. 🍵'
    })
    return
  }
  
  bar.tick()

  setTimeout(fn, 60 * 1000)
}
