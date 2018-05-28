import React from 'react';
import './SearchResults.css';
import Hotel from './Hotel';

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