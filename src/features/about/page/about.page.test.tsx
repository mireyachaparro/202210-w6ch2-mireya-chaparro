import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Home from './about.page';

describe('Given About component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Home />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = /About/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
