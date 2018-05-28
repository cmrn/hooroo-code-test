import data from './data.json';

const SORT_HIGH = 'sort_high';
const SORT_LOW = 'sort_low';


function searchHotels(sortOrder) {
  const lowSortFunc = (a, b) => a.price > b.price;
  // return a promise to mimic an external API call
  return new Promise(resolve => {
    if(sortOrder === SORT_LOW) {
      resolve(data.sort(lowSortFunc));
    } else if(sortOrder === SORT_HIGH) {
      resolve(data.sort(lowSortFunc).reverse());
    } else {
      resolve(data);
    }
  });
}

export { searchHotels, SORT_HIGH, SORT_LOW };