import * as React from 'react';
import renderer from 'react-test-renderer';
import ViewBooks from '../components/screens/ViewBooks';

test('view books content matches the snapshot', () => {
    /* Content for ViewBooks.js matches the snapshot */
    const tree = renderer
      .create(<ViewBooks />)
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });