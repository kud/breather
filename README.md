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

## Advices

Two pieces of advice to give your eyes a rest.

#### F.lux

Install [f.lux](http://justgetflux.com/)
_"F.lux makes the colour of your computer's display adapt to the time of day, warm at night and like sunlight during the day."_

```
$ brew cask install flux
```


#### 20/20/20

Every 20 minutes, watch a 20-meters-from-you thing (like the coffee machine) during 20 secondes.


## Changelog

- 0.4.1 : You can now use `~/.breather` as configuration file.
- 0.1.0 : First version.

## Credits

- Icon: Tea by <a href="http://thenounproject.com/jacob/">Jacob Halton</a> from The <a href="http://thenounproject.com/">Noun Project</a>
