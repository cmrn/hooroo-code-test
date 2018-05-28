import React from 'react';
import PropTypes from 'prop-types';
import cnames from 'classnames';
import './Hotel.css';
import Rating from './Rating';

const Hotel = ({ hotel, className, ...props }) => {
  return (
    <div className={cnames("Hotel", className)} {...props}>
      <div className="Hotel-image">
        <span className="Hotel-promotion">{hotel.promotion}</span>
        <img src={hotel.image} alt='' />
      </div>
      <div className="Hotel-details">
        <div className="Hotel-title">
          <h3>{hotel.title}</h3>
          <Rating className="Hotel-rating" rating={hotel.rating} type={hotel.ratingType} />
        </div>
        <div className="Hotel-address">{hotel.address}</div>
        <div className="Hotel-room">{hotel.roomName}</div>
      </div>
      { hotel.freeCancellation ? <div className="Hotel-cancellation">Free cancellation</div> : null }
      <div className="Hotel-price">
        <div className="Hotel-priceDescription">1 night total (AUD)</div>
        <div>
          <span className="Hotel-currencySymbol">$</span> <span className="Hotel-priceNumber">{hotel.price}</span>
        </div>
        { hotel.savings > 0 ? <div className="Hotel-savings">Save ${hotel.savings}~</div> : null }
      </div>
    </div>
  )
};

Hotel.propTypes = {
  hotel: PropTypes.object.isRequired, // TODO: Make a shape for hotel
  className: PropTypes.string,
};

export default Hotel;