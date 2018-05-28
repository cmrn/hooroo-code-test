import React from 'react';
import ReactStars from 'react-stars';
import cnames from 'classnames';
import './Rating.css';

const Rating = ({ rating, type, className, ...props }) => {
  const isStar = type === 'star'
  const char = isStar ? '★' : '●';
  const size = isStar ? 25 : 30; // Circle is smaller than star, so we need to scale it up
  const label = `${rating} stars${isStar ? null : ' (self rated)'}`; // for screen readers
  return (
    <div aria-label={label} className={cnames(className, "Rating")} {...props}>
      <ReactStars char={char} count={5} value={rating} size={size} edit={false} color1={'#ccc'} />
    </div>
  );
}

export default Rating;