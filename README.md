# VASTHandler

A modern, stand-alone VAST fetcher and parser.

## Status

This project is just getting started, and might not fit your particular
needs. It is meant for VAST Tags to be consumed by a mobile video
platform, and no decisions have been made yet whether or not to support
Flash for example, or to allow / foster "plugins" if you will.

## Installation
For now, clone repo and (if needed outside as globals) run `gulp build`.

## Usage

### Ready-made

If you want to use VASTHandler as is, simply require the main module in:

```js
var vastHandler = require('vast-handler');
```

This gives you a clean API to fetch and parse VAST Tags:

```js
vastHandler.get('http://some-provider.com/vast.xml')
  .then(vastHandler.parseVast)
  .then(function(vastResponse) {
    playVideo(vastResponse); // Or, you know. Whatever
  }).catch(function(e){
    Rollbar.error(e); // Or deal with errors some other way.
  });
```

### Composing a custom client

If you'd prefer to deal with errors, fetching or parsing yourself,
you can load individual modules from this package, like so:

```js
var get = require('vast-handler/url-handler-fetch');
// Currying is recommended here because of potential wrappers.
var parseVast = function(get){
  return function(xmlResponse) {
    return new Promise(function(resolve, reject){
      // implement your own parsing logic here,
      // follow a wrapper etc.
    });
  };
}

get('http://some-provider.com/vast.xml')
  .then(parseVast(get))
  .then(function(vastResponse){
    playVideo(vastResponse);
  })
  .catch(function(e){
    Rollbar.error(e);
  });
```

Feel free to pick and match as fits your needs.

### Function signatures

Coming soon.

## Contributing

Coming soon.

[![Travis build status](http://img.shields.io/travis/SponsorPay/vast-handler.svg?style=flat)](https://travis-ci.org/SponsorPay/vast-handler)
[![Code Climate](https://codeclimate.com/github/SponsorPay/vast-handler/badges/gpa.svg)](https://codeclimate.com/github/SponsorPay/vast-handler)
[![Test Coverage](https://codeclimate.com/github/SponsorPay/vast-handler/badges/coverage.svg)](https://codeclimate.com/github/SponsorPay/vast-handler)
[![Dependency Status](https://david-dm.org/SponsorPay/vast-handler.svg)](https://david-dm.org/SponsorPay/vast-handler)
[![devDependency Status](https://david-dm.org/SponsorPay/vast-handler/dev-status.svg)](https://david-dm.org/SponsorPay/vast-handler#info=devDependencies)
