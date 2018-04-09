import React from 'react';
import './Slideshow.css';

const Arrows = function(props) {
  return (
    <div className="arrows">
      <span
        onClick={props.decreaseCount}
        className="arrow btn-arrow btn-arrow-left"
      />
      <span
        onClick={props.increaseCount}
        className="arrow btn-arrow btn-arrow-right"
      />
    </div>
  );
};

export default Arrows;
