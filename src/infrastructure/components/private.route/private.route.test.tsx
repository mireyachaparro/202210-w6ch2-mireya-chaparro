import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { PrivateRoute } from './private.route';
import { Navigate } from 'react-router-dom';

jest.mock('@auth0/auth0-react');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: jest.fn(),
}));

describe('Given PrivateRoute component', () => {
    describe('When we render the component and user is authenticated', () => {
        beforeEach(() => {
            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: true,
            });
            render(
                <Router>
                    <PrivateRoute>
                        <p>PrivateRoute</p>
                    </PrivateRoute>
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('PrivateRoute', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });

    describe('When we render the component and user is not authenticated', () => {
        beforeEach(() => {
            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: false,
            });
            render(
                <Router initialEntries={['/home']} initialIndex={1}>
                    <PrivateRoute>
                        <p>PrivateRoute</p>
                    </PrivateRoute>
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('PrivateRoute', 'i');
            const element = screen.queryByText(title);
            expect(element).toBe(null);
            expect(Navigate).toHaveBeenCalled();
        });
    });
});
