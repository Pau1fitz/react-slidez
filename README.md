# React Slidez

Customisable React Slideshow component.


## Demo

Live demo: [pau1fitz.github.io/slideshow](http://pau1fitz.github.io/slideshow/)


## Installation

The easiest way to use react-slidezz is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `build/index.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-slidez --save
```


## Usage


```js
var Slideshow = require('react-slidezz');

<Slideshow
  showIndex
  showArrows
  autoplay
  slideInterval={2000}
  slides=['1.jpg', '2.jpg']
  effect={'fade'}
  height={'100%'}
  width={'100%'}
/>

```


### Properties

| Property | Description | Type |
|----------|-------------|------|
| showIndex | Show the index of the current slide | Boolean |
| showArrows | Show arrows to navigate through the slides | Boolean |
| autoplay | Select whether you want the slideshow to autoplay or not | Boolean |
| slideInterval={2000}| Dictate the speed in ms at which the slides change | Integer |
| slides={slides} | The slides you pass into the component | Array |
| effect |Choose the animation effect of your slideshow. Options include `fade`, `left`, `top`, `right` | String |
| height | Choose the height of the slideshow. Example `height={'50px'}` or `height={'50%'}`| String |
| width | Choose the width of the slideshow. Example `width={'50px'}` or `width={'50%'}`| String |

hich will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT License

Copyright (c) 2017 Paul Fitzgerald.
