import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';
import { SORT_LOW } from '../api';

beforeEach(() => {
  Math.random = jest.fn(() => 0.0487723387081509); // react-star uses a random number
})

const hotels = [
  {
  "id": "cxd650nuyo",
  "title": "Courtyard by Marriott Sydney-North Ryde",
  "address": "7-11 Talavera Rd, North Ryde",
  "image": "https://unsplash.it/145/125/?random1",
  "rating": 4,
  "ratingType": "self",
  "promotion": "Exclusive Deal",
  "roomName": "Deluxe Balcony Room",
  "price": 329,
  "savings": 30,
  "freeCancellation": true
  }, {
  "id": "mesq6mggyn",
  "title": "Primus Hotel Sydney",
  "address": "339 Pitt St, Sydney",
  "image": "https://unsplash.it/145/125/?random2",
  "rating": 5,
  "ratingType": "self",
  "promotion": "Exclusive Deal",
  "roomName": "Deluxe King",
  "price": 375,
  "savings": 28,
  "freeCancellation": true
  }
];

it('renders no results when hotels is empty', () => {
  const tree = renderer.create(
    <Search sort={SORT_LOW} hotels={[]} onChange={()=>{}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('allows a className to be set', () => {
  const tree = renderer.create(
    <Search sort={SORT_LOW} hotels={[]} onChange={()=>{}} className="AdditionalClass" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('passes other props through', () => {
  const tree = renderer.create(
    <Search sort={SORT_LOW} hotels={[]} onChange={()=>{}} aria-label="I should be on the div" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders results when hotels is not empty', () => {
  const tree = renderer.create(
    <Search sort={SORT_LOW} hotels={hotels} onChange={()=>{}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});