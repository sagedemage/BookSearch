import * as React from 'react';
import { screen, render, fireEvent, cleanup } from '@testing-library/react-native';
import App from '../../App';

test('subject tab navigation', () => {
    render(
        <App />
    );

    /* Subject Navigation Tab */
    let element = screen.getByLabelText("Subject, tab, 2 of 3")

    expect(element.props.accessibilityLabel).toContain('Subject, tab, 2 of 3');
    expect(element.props.accessibilityRole).toContain('button');
    expect(element.props.style[1].backgroundColor).toContain('#34455D');
    cleanup();
})

test('subject header', () => {
    render(
        <App />
    );

    fireEvent.press(screen.getByLabelText('Subject, tab, 2 of 3'));

    /* Subject Header */
    let element = screen.getByRole('header', {name: 'Subject'})

    expect(element.props.children).toContain('Subject');
    expect(element.props.accessibilityRole).toContain('header');
    expect(element.props.style.color).toContain('white');
    cleanup();
})