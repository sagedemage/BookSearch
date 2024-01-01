import * as React from 'react';
import App from '../../App';
import renderer from 'react-test-renderer';

jest.useFakeTimers()

test('app content matches the snapshot', () => {
  /* Content for App.js matches the snapshot */
  const tree = renderer
    .create(<App />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

