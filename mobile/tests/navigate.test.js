import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react-native';
import App from '../App';

test('shows profile screen when Subject is pressed', () => {
  render(
    <App />
  );

   //screen.getByRole('Screen', { name: 'Subject' });

  fireEvent.press(screen.getByText('Subject'));

  // Role: header
  const element = screen.getByText('Subject')
  expect(element).toBeOnTheScreen();
});

