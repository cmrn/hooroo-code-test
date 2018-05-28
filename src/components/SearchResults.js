import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';
import Hotel from './Hotel';

const SearchResults = ({ hotels, ...props }) => {
  return (
    <div {...props}>
      {hotels.map(hotel => 
        <Hotel key={hotel.id} hotel={hotel} />
      )}
    </div>
  );
};

SearchResults.propTypes = {
  hotels: PropTypes.array.isRequired
}

export default SearchResults;