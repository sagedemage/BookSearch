import * as React from 'react';
import renderer from 'react-test-renderer';
import ViewBooks from '../components/screens/ViewBooks';

test('check the view books screen content matches with the snapshot', () => {
    /* Content for ViewBooks.js  */
    const tree = renderer
      .create(<ViewBooks />)
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });