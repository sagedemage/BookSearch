import * as React from 'react';
import renderer from 'react-test-renderer';
import ViewBooks from '../../components/screens/ViewBooks';

test('view books UI component matches the snapshot', () => {
    /* ViewBooks.js UI component matches the snapshot */
    const tree = renderer
      .create(<ViewBooks />)
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });