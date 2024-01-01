import * as React from 'react';
import renderer from 'react-test-renderer';
import ViewBooksBySubject from '../../components/screens/ViewBooksBySubject';

test('view books by subject UI component matches the snapshot', () => {
    /* ViewBooksBySubject.js UI component matches the snapshot */
    const tree = renderer
      .create(<ViewBooksBySubject />)
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });