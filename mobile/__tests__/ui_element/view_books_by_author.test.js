import * as React from 'react';
import { screen, render, cleanup } from '@testing-library/react-native';
import ViewBooksByAuthor from '../../components/screens/ViewBooksByAuthor';

test('text input UI element for view books by author component', () => {
    /* Text Input UI element for ViewBooksByAuthor.js component */
    render(
        <ViewBooksByAuthor />
    );

    element = screen.getByPlaceholderText('Search Books by Author');

    expect(element.props.placeholder).toContain("Search Books by Author");
    expect(element.props.defaultValue).toContain("");
    expect(element.props.style.borderWidth).toBe(2);
    expect(element.props.style.height).toBe(35);
    expect(element.props.style.paddingHorizontal).toBe(10);
    expect(element.props.style.width).toBe(200);
    cleanup();
})