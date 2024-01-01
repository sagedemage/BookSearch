import * as React from 'react';
import renderer from 'react-test-renderer';
import ViewBooksByAuthor from '../../components/screens/ViewBooksByAuthor';

test('view books by author content matches the snapshot', () => {
    /* Content for ViewBooksByAuthor.js matches the snapshot */
    const tree = renderer
      .create(<ViewBooksByAuthor />)
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });