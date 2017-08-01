import React, { Component } from 'react';
import Arrows from './Arrows.js';
import './Slideshow.css';

class Slideshow extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
			slideInterval: props.slideInterval || 2000,
			showIndex: props.showIndex || false,
			showArrows: props.showArrows || false,
			effect: props.effect || false,
			slides: props.slides.length > 0 ? props.slides : props.children,
			autoplay: props.autoplay || false,
			enableKeyboard: props.enableKeyboard || true
		};

		this.runSlideShow = this.runSlideShow.bind(this);
		this.autoSlideshow = this.autoSlideshow.bind(this);
		this.restartSlideshow = this.restartSlideshow.bind(this);
		this.increaseCount = this.increaseCount.bind(this);
		this.decreaseCount = this.decreaseCount.bind(this);
		this.enableKeyboard = this.enableKeyboard.bind(this);
	}

	componentDidMount() {

		if(this.state.autoplay)
			this.runSlideShow();

		if(this.state.enableKeyboard)
			document.addEventListener('keydown', this.handleKeyboard);
	}

	handleKeyboard (e) {
		e.keyCode === 37 ? this.decreaseCount() : e.keyCode === 39 ? this.increaseCount() : null;
	}

	runSlideShow () {
		let intervalId = setInterval(this.autoSlideshow, this.state.slideInterval);
		this.setState({
			intervalId
		});
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	autoSlideshow () {
		this.setState({
			currentSlide: (this.state.currentSlide + 1) % this.state.slides.length
		});
	}

	restartSlideshow () {
		clearInterval(this.state.intervalId);
		this.runSlideShow();
	}

	increaseCount () {

		this.state.autoplay ? this.restartSlideshow() : null;
		this.setState({
			currentSlide: (this.state.currentSlide + 1) % this.state.slides.length
		});
	}

	decreaseCount () {
		this.state.autoplay ? this.restartSlideshow() : null;

		let currentSlide;
		currentSlide = this.state.currentSlide === 0 ? this.state.slides.length - 1 : currentSlide = this.state.currentSlide - 1;
		this.setState({
			currentSlide
		});
	}

	render() {

		const { slides, showIndex, effect, showArrows } = this.state;

		let slideEffect = effect === undefined ? 'fade' : effect;
		let slideShowSlides;

		if(!this.props.children){
			slideShowSlides = slides.map((slide, i) => {
				return <li className = {`slide ${effect} ${(this.state.currentSlide === i ? "showing-"  + slideEffect  : "")}`} key={i} style={{backgroundImage: `url(${slide})`}}></li>
			});
		} else {
			slideShowSlides = slides.map((slide, i) => {
				return <li className = {`slide ${effect} ${(this.state.currentSlide === i ? "showing-"  + slideEffect  : "")}`} key={i}>{slide}</li>
			});
		}

		return (

			<div style={{position:'absolute', height: this.props.height || '100%', width: this.props.width || '100%'}}>
				<div className="slideshow-container">
					<ul className="slides">
						{slideShowSlides}
					</ul>

					{showArrows &&  (
						<Arrows decreaseCount={this.decreaseCount} increaseCount={this.increaseCount}/>
					)}

					{showIndex && (
						<div className="show-index">
							<p>{`${this.state.currentSlide + 1} / ${slides.length}`}</p>
						</div>
					)}
				</div>
			</div>

		);
	}
}

export default Slideshow;
