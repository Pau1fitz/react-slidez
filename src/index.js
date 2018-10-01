import React, { Component } from 'react';
import Arrows from './Arrows.js';
import './Slideshow.css';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: props.defaultIndex,
      slideInterval: props.slideInterval,
      showIndex: props.showIndex,
      useDotIndex: props.useDotIndex,
      showArrows: props.showArrows,
      effect: props.effect,
      autoplay: props.autoplay,
      enableKeyboard: props.enableKeyboard,
      slides: props.slides.length > 0 ? props.slides : props.children
    };

    this.runSlideShow = this.runSlideShow.bind(this);
    this.autoSlideshow = this.autoSlideshow.bind(this);
    this.restartSlideshow = this.restartSlideshow.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
  }

  componentDidMount() {
    if (this.state.autoplay) this.runSlideShow();

    if (this.state.enableKeyboard)
      document.addEventListener('keydown', this.handleKeyboard);
  }

  handleKeyboard(e) {
    e.keyCode === 37
      ? this.decreaseCount()
      : e.keyCode === 39 ? this.increaseCount() : null;
  }

  runSlideShow() {
    let intervalId = setInterval(this.autoSlideshow, this.state.slideInterval);
    this.setState({
      intervalId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    document.removeEventListener('keydown', this.handleKeyboard);
  }

  autoSlideshow() {
    this.setState({
      currentSlide: (this.state.currentSlide + 1) % this.state.slides.length
    });
  }

  restartSlideshow() {
    clearInterval(this.state.intervalId);
    this.runSlideShow();
  }

  increaseCount() {
    this.state.effect === 'left'
      ? this.setState({
          effect: 'right'
        })
      : this.state.effect === 'bounce-left'
        ? this.setState({
            effect: 'bounce-right'
          })
        : null;

    this.state.autoplay ? this.restartSlideshow() : null;
    this.setState({
      currentSlide: (this.state.currentSlide + 1) % this.state.slides.length
    });
  }

  decreaseCount() {
    this.state.effect === 'right'
      ? this.setState({
          effect: 'left'
        })
      : this.state.effect === 'bounce-right'
        ? this.setState({
            effect: 'bounce-left'
          })
        : null;

    this.state.autoplay ? this.restartSlideshow() : null;

    let currentSlide;
    currentSlide =
      this.state.currentSlide === 0
        ? this.state.slides.length - 1
        : (currentSlide = this.state.currentSlide - 1);
    this.setState({
      currentSlide
    });
  }

  render() {
    const { slides, showIndex, useDotIndex, effect, showArrows } = this.state;

    let slideEffect = effect === undefined ? 'fade' : effect;
    let slideShowSlides;
    let slideShowIndex;

    if (!this.props.children) {
      slideShowSlides = slides.map((slide, i) => {
        return (
          <li
            className={`slide ${effect} ${
              this.state.currentSlide === i ? 'showing-' + slideEffect : ''
            }`}
            key={i}
            style={{ backgroundImage: `url(${slide})` }}
          />
        );
      });
    } else {
      slideShowSlides = slides.map((slide, i) => {
        return (
          <li
            className={`slide ${effect} ${
              this.state.currentSlide === i ? 'showing-' + slideEffect : ''
            }`}
            key={i}
          >
            {slide}
          </li>
        );
      });
    }

    if (useDotIndex) {
      slideShowIndex = (
        <div className="show-index is-dot">
          {slides.map((slide, i) => {
            return (
              <span
                className={`dot ${
                  this.state.currentSlide === i ? 'is-active' : ''
                }`}
                key={`dot${i}`}
              />
            );
          })}
        </div>
      );
    } else {
      slideShowIndex = (
        <div className="show-index is-text">
          <p>{`${this.state.currentSlide + 1} / ${slides.length}`}</p>
        </div>
      );
    }

    return (
      <div
        style={{
          position: 'absolute',
          height: this.props.height || '100%',
          width: this.props.width || '100%'
        }}
      >
        <div className="slideshow-container">
          <ul className="slides">{slideShowSlides}</ul>

          {showArrows && (
            <Arrows
              decreaseCount={this.decreaseCount}
              increaseCount={this.increaseCount}
            />
          )}

          {showIndex && slideShowIndex}
        </div>
      </div>
    );
  }
}

Slideshow.defaultProps = {
  showIndex: false,
  showArrows: true,
  autoplay: true,
  enableKeyboard: true,
  useDotIndex: false,
  slideInterval: 2000,
  defaultIndex: 0,
  effect: 'fade',
  slides: [],
  height: '100%',
  width: '100%'
};

export default Slideshow;
