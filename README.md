# Breather!

<img src="https://raw.github.com/kud/breather/master/resources/icon.png"> _A break taker, like Kitkat but better._

## Preview

<img src="https://raw.github.com/kud/breather/master/resources/preview-cli.png">

<img src="https://raw.github.com/kud/breather/master/resources/preview-notifier.png">

<img src="https://raw.github.com/kud/breather/master/resources/preview-notifier2.png">

## Install

```
$ npm install breather -g
```

## Settings

All settings are configured in `~/.breather`.

### Core

```javascript
{
  "duration": "25", // duration in minute of a session. want less than a minute? use float like 0.5
  "location": "Paris,fr", // where you are
  "lang": "en" // language
}
```

### (pre|post) tasks

You also can specify some pre-tasks and post-tasks.

An example is given, it hides and shows Twitter and Limechat on Mac OS X.

> AppleScript in GNU/Linux: [What are the alternative(s) to applescript in Linux?](http://stackoverflow.com/questions/7642299/what-are-the-alternatives-to-applescript-in-linux-how-are-they-different)

## Usage

```
$ breather
```

## Advice

Some pieces of advice to give your eyes a rest.

#### F.lux

Install [f.lux](http://justgetflux.com/) on your desktop (Windows, MacOSX, Linux) and iOS device.

> F.lux makes the colour of your computer's display adapt to the time of day, warm at night and like sunlight during the day.

```
$ brew cask install flux
```

#### Twilight

Install [Twilight](https://play.google.com/store/apps/details?id=com.urbandroid.lux) on your Android.

> The Twilight app makes your device screen adapt to the time of the day. It filters the blue spectrum on your phone or tablet after sunset and protects your eyes with a soft and pleasant red filter. The filter intensity is smoothly adjusted to the sun cycle based on your local sunset and sunrise times.


#### 20/20/20

Every 20 minutes, watch a thing that is at least 20 metres away from you (like the coffee machine) during 20 secondes.


More informations on "[7 things you can do right now to protect your vision](http://thenextweb.com/lifehacks/2014/04/23/7-things-can-right-now-protect-vision/)".

## Changelog

- 0.4.1 : You can now use `~/.breather` as configuration file.
- 0.1.0 : First version.

## Credits

- Icon: Tea by <a href="http://thenounproject.com/jacob/">Jacob Halton</a> from The <a href="http://thenounproject.com/">Noun Project</a>
