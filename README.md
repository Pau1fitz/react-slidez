# React Slidez

<p align="center">
  <img src="https://raw.githubusercontent.com/pau1fitz/react-slidez/master/slidez.png" width="250"/>
 </p>
 <p align="center">
  <g-emoji alias="sparkles" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/2728.png" ios-version="6.0">✨</g-emoji>
Customisable React Slideshow component.<g-emoji alias="sparkles" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/2728.png" ios-version="6.0">✨</g-emoji>
</p>

## Demo

<g-emoji alias="muscle" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4aa.png" ios-version="6.0">💪</g-emoji>
[Live demo](http://pau1fitz.github.io/react-slidez/)
<g-emoji alias="muscle" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4aa.png" ios-version="6.0">💪</g-emoji>

## Installation

```
npm install react-slidez --save
```

### Properties

| Property       | Description                                                                                                                                  | Type    | Default    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---------- |
| showIndex      | Show the index of the current slide                                                                                                          | Boolean | `false`    |
| showArrows     | Show arrows to navigate through the slides                                                                                                   | Boolean | `true`     |
| autoplay       | Select whether you want the slideshow to autoplay or not                                                                                     | Boolean | `true`     |
| enableKeyboard | Select whether you want to allow the user change the slides with the keyboard                                                                | Boolean | `true`     |
| useDotIndex    | Select whether you want the index to be dots or numbers                                                                                      | Boolean | `false`    |
| slideInterval  | Dictate the speed in ms at which the slides change                                                                                           | Integer | `2000`     |
| defaultIndex   | Choose the index that you wish to start at                                                                                                   | Integer | `0`        |
| slides         | The slides you pass into the component. This can be an array of images, or other components which are passed as children. See example below. | Array   | No default |
| effect         | Choose the animation effect of your slideshow. Options include `fade`, `left`, `top`, `right`, `bottom`, `bounce-right`, `bounce-left`       | String  | `'fade'`   |
| height         | Choose the height of the slideshow. Example `height={'50px'}` or `height={'50%'}`                                                            | String  | `'100%'`   |
| width          | Choose the width of the slideshow. Example `width={'50px'}` or `width={'50%'}`                                                               | String  | `'100%'`   |

## Usage

```js
const Slideshow = require('react-slidez');

<Slideshow
  showIndex
  showArrows
  autoplay
  enableKeyboard
  useDotIndex
  slideInterval={2000}
  defaultIndex={1}
  slides={['1.jpg', '2.jpg']}
  effect={'fade'}
  height={'100%'}
  width={'100%'}
/>
```

You can also pass other components to the `Slideshow` component as children. All the same properties as above are available.

```js
const Slideshow = require("react-slidez");

<Slideshow>
  <ComponentOne />
  <ComponentTwo />
  <Checkout />
</Slideshow>;
```

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2017 Paul Fitzgerald
