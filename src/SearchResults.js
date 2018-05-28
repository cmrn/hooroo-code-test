import React from 'react';
import './SearchResults.css';

const Hotel = ({ hotel }) => {
  return (
    <div className="Hotel">
      <div className="Hotel-image">
        <span className="Hotel-promotion">{hotel.promotion}</span>
        <img src={hotel.image} alt='' />
      </div>
      <div className="Hotel-details">
        <h3 className="Hotel-title">{hotel.title}</h3>
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

const SearchResults = ({ results }) => {
  if(!Array.isArray(results)) return null;

  return (
    <div>
      {results.map(hotel => 
        <Hotel key={hotel.id} hotel={hotel} />
      )}
    </div>
  );
};

export default SearchResults;