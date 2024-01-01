import * as React from 'react';
import App from '../../App';
import renderer from 'react-test-renderer';

jest.useFakeTimers()

test('app UI component matches the snapshot', () => {
  /* App.js UI component matches the snapshot */
  const tree = renderer
    .create(<App />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

