import React from 'react';
import renderer from 'react-test-renderer';
import Hotel from './Hotel';

beforeEach(() => {
  Math.random = jest.fn(() => 0.0487723387081509); // react-star uses a random number
})

const hotel = {
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
};

it('renders a hotel', () => {
  const tree = renderer.create(
    <Hotel hotel={hotel} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('allows a className to be set', () => {
  const tree = renderer.create(
    <Hotel hotel={hotel} className="SomeClass" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('passes through other props', () => {
  const tree = renderer.create(
    <Hotel hotel={hotel} aria-label="another prop" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});