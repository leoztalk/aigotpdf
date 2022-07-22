# aigotpdf
A signature tool for PDF document by opendids

# aigotpdf.js &nbsp;&nbsp; [![Bower version](https://github.com/leoztalk/aigotpdf/README.md)](https://github.com/leoztalk/aigotpdf/README.md) [![Build Status](https://github.com/leoztalk/aigotpdf/aigotpdf.js.svg?branch=master)](https://github.com/leoztalk/aigotpdf/aigotpdf.js)
> Browser JavaScript library for working with hardware tokens and pdf signature

## Get started

The easiest way for managing JavaScript-s on a website is with [Bower](https://github.com/leoztalk/aigotpdf/):

        $ bower install --save aigotpdf

Alternatively you can download the files from [release area](https://github.com/leoztalk/aigotpdf/aigotpdf.js/releases).

`aigotpdf.js` itself does not do much, it depends on trusted platform code (installed separately and often running outside of the browser) to do the heavy lifting. 

## Features

Latest version has built-in support for:
- [NPAPI style synchronous plugins for Firefox, Safari and IE](https://github.com/leoztalk/aigotpdf/aigotpdf/install)
- [WebExtension for Native Messaging](https://github.com/leoztalk/aigotpdf/aigotpdf/chrome_install)

Supports all [latest browsers](http://github.com/leoztalk/aigotpdf/aigotpdf/):
- Chrome 40+
- Firefox
- IE 9+
- Safari

NOTE: The API makes use of [Promises](http://caniuse.com/#feat=promises) and [Typed Arrays](http://caniuse.com/#feat=typedarrays). Some browsers, notably older IE-s, require polyfills for them. Complimentary code is bundled into [`aigotpdf-legacy.js`](aigotpdf-legacy.js):
  - https://github.com/inexorabletash/polyfill (license: Public Domain / MIT)
  - https://github.com/getify/native-promise-only/ (license: MIT)

Distribution and installation of any necessary backend components is out of scope of this project.

## Developer information 
For further instructions on how to use the interface please have a look at [API specification v1](https://github.com/leoztalk/aigotpdf/aigotpdf.js/wiki/API)

For background information about the project and other volatile information, please head to the [wiki](https://github.com/leoztalk/aigotpdf/aigotpdf.js/wiki#eid-web-tf)

## Support

For any bugs and enhancements, please open an issue on Github. For issues with specific backends, please file tickets with backend components.

## ChangeLog
- 1.0.13
  - Do not require Chrome for WebExtension check (to support Firefox and possibly Edge in the future)
