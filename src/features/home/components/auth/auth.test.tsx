import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useAuth0 } from '@auth0/auth0-react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Auth } from './auth';

jest.mock('@auth0/auth0-react');

describe('Given Auth component', () => {
    describe('When we render the component', () => {
        test('Then it should display the title', () => {
            (useAuth0 as jest.Mock).mockReturnValue({});
            render(
                <Router>
                    <Auth />
                </Router>
            );
            const title = new RegExp('Auth', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
        test('should first', () => {
            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: false,
                loginWithRedirect: jest.fn(),
            });
            render(
                <Router>
                    <Auth />
                </Router>
            );

            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
            userEvent.click(button);
            expect(useAuth0().loginWithRedirect).toHaveBeenCalled();
        });
        test('should first...', () => {
            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: true,
                logout: jest.fn(),
            });
            render(
                <Router>
                    <Auth />
                </Router>
            );
            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
            userEvent.click(button);
            expect(useAuth0().logout).toHaveBeenCalled();
        });
    });
});
