import * as React from 'react';
import renderer from 'react-test-renderer';
import ViewBooksBySubject from '../components/screens/ViewBooksBySubject';

test('check the view books by subject content matches with the snapshot', () => {
    /* Content for ViewBooksBySubject.js matches the snapshot */
    const tree = renderer
      .create(<ViewBooksBySubject />)
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });