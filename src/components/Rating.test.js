import React from 'react';
import renderer from 'react-test-renderer';
import Rating from './Rating';

beforeEach(() => {
  Math.random = jest.fn(() => 0.0487723387081509); // react-star uses a random number
})

it('renders 5 stars', () => {
  const tree = renderer.create(
    <Rating rating={5} type={'star'} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders half stars', () => {
  const tree = renderer.create(
    <Rating rating={3.5} type={'star'} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders 4.5 circles', () => {
  const tree = renderer.create(
    <Rating rating={4.5} type={'self'} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('allows a className to be set', () => {
  const tree = renderer.create(
    <Rating rating={5} type={'star'} className="SomeClass" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('passes through other props', () => {
  const tree = renderer.create(
    <Rating rating={5} type={'star'} aria-label="another prop" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
