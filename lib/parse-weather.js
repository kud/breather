var settings = require(process.env.HOME + "/.breather").settings
  , i18n = require("../i18n/" + (settings.lang || "en"))
  , messages = {
      temperature : [
        {
          temp : -50,
          message : i18n.weather.temperature["-50"]
        },
        {
          temp : 0,
          message : i18n.weather.temperature["0"]
        },
        {
          temp : 10,
          message : i18n.weather.temperature["10"]
        },
        {
          temp : 30,
          message : i18n.weather.temperature["30"]
        },
        {
          temp : Infinity,
          message : i18n.weather.temperature["Infinity"]
        }
      ]
    }

module.exports = function( feed ) {
  var message = ""
    , weather = feed.main
    , tempDone = false
    , humDone = false
    , temp = ~~( weather.temp - 273.15 ) // from kelvin to celcius

  messages.temperature.forEach( function( item ) {
    if ( tempDone || temp >= item.temp ) return
    message += item.message
    tempDone = true
  })

  return message
}
