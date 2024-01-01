import * as React from 'react';
import renderer from 'react-test-renderer';
import ViewBooksByAuthor from '../../components/screens/ViewBooksByAuthor';

test('view books by author UI component matches the snapshot', () => {
    /* ViewBooksByAuthor.js UI component matches the snapshot */
    const tree = renderer
      .create(<ViewBooksByAuthor />)
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });