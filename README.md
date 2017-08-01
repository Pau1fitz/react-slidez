# React Slidez

Customisable React Slideshow component.


## Demo

[Live demo](http://pau1fitz.github.io/react-slidez/)


## Installation

```
npm install react-slidez --save
```


### Properties

| Property | Description | Type |
|----------|-------------|------|
| showIndex | Show the index of the current slide | Boolean |
| showArrows | Show arrows to navigate through the slides | Boolean |
| autoplay | Select whether you want the slideshow to autoplay or not | Boolean |
| enableKeyboard | Select whether you want to allow the user change the slides with the keyboard | Boolean |
| slideInterval={2000}| Dictate the speed in ms at which the slides change | Integer |
| slides={slides} | The slides you pass into the component | Array |
| effect |Choose the animation effect of your slideshow. Options include `fade`, `left`, `top`, `right` | String |
| height | Choose the height of the slideshow. Example `height={'50px'}` or `height={'50%'}`| String |
| width | Choose the width of the slideshow. Example `width={'50px'}` or `width={'50%'}`| String |


## Usage


```js
var Slideshow = require('react-slidez');

<Slideshow
  showIndex
  showArrows
  autoplay
  enableKeyboard
  slideInterval={2000}
  slides=['1.jpg', '2.jpg']
  effect={'fade'}
  height={'100%'}
  width={'100%'}
/>

```

You can also pass other components to the `Slideshow` component as children.

```js
var Slideshow = require('react-slidez');

<Slideshow
  showIndex
  showArrows
  autoplay
  enableKeyboard
  slideInterval={2000}
  effect={'fade'}
  height={'100%'}
  width={'100%'}>
	<ComponentOne />
	<ComponentTwo />
	<Checkout />
</Slideshow>

```


## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2017 Paul Fitzgerald.
