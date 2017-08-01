# React Slidez

Customisable React Slideshow component.


## Demo

[Live demo](http://pau1fitz.github.io/react-slidez/)


## Installation

```
npm install react-slidez --save
```


### Properties

| Property | Description | Type | Default |
|----------|-------------|------|---------
| showIndex | Show the index of the current slide | Boolean | `false` |
| showArrows | Show arrows to navigate through the slides | Boolean | `true` |
| autoplay | Select whether you want the slideshow to autoplay or not | Boolean | `true` |
| enableKeyboard | Select whether you want to allow the user change the slides with the keyboard | Boolean | `true` |
| slideInterval | Dictate the speed in ms at which the slides change | Integer | `2000` |
| defaultIndex | Choose the index that you wish to start at | Integer | `0` |
| slides | The slides you pass into the component. This can be an array of images, or other components which are passed as children. See example below. | Array | No default |
| effect |Choose the animation effect of your slideshow. Options include `fade`, `left`, `top`, `right` | String | `'fade'` |
| height | Choose the height of the slideshow. Example `height={'50px'}` or `height={'50%'}`| String | `'100%'` |
| width | Choose the width of the slideshow. Example `width={'50px'}` or `width={'50%'}`| String | `'100%'` |


## Usage


```js
var Slideshow = require('react-slidez');

<Slideshow
  showIndex
  showArrows
  autoplay
  enableKeyboard
  slideInterval={2000}
  defaultIndex={1}
  slides=['1.jpg', '2.jpg']
  effect={'fade'}
  height={'100%'}
  width={'100%'}
/>

```

You can also pass other components to the `Slideshow` component as children. All the same properties as above are available.

```js
var Slideshow = require('react-slidez');

<Slideshow>
  <ComponentOne />
  <ComponentTwo />
  <Checkout />
</Slideshow>

```


## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2017 Paul Fitzgerald.
