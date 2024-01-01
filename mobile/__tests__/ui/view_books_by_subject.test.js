import * as React from 'react';
import { screen, render, cleanup } from '@testing-library/react-native';
import ViewBooksBySubject from '../../components/screens/ViewBooksBySubject';

test('text input UI', () => {
    /* Text Input UI for ViewBooksBySubject.js */
    render(
        <ViewBooksBySubject />
    );

    element = screen.getByPlaceholderText('Search Books by Subject');

    expect(element.props.placeholder).toContain("Search Books by Subject");
    expect(element.props.defaultValue).toContain("");
    expect(element.props.style.borderWidth).toBe(2);
    expect(element.props.style.height).toBe(35);
    expect(element.props.style.paddingHorizontal).toBe(10);
    expect(element.props.style.width).toBe(200);
    cleanup();
})