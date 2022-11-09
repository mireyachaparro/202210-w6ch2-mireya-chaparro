import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given Footer component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(<Footer />);
        });
        test('Then it should display "ISDI"', () => {
            const element = screen.getByText(/ISDI/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display today data', () => {
            const expectedDate = new Date().toLocaleString();
            const element = screen.getByText(expectedDate);
            expect(element).toBeInTheDocument();
        });
    });
});
