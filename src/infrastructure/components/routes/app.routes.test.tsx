import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../../features/home/page/home.page', () => {
    return () => <div>Test Home</div>;
});

jest.mock('../../../features/todo/page/todo.page', () => {
    return () => <div>Test Todo</div>;
});

jest.mock('../../../features/about/page/about.page', () => {
    return () => <div>Test About</div>;
});

describe('Given AppRoutes component', () => {
    let paths: Array<string>;
    beforeEach(() => {
        paths = ['/', '/todo', '/about'];
    });
    describe(`When we render the component 
                And the route is home`, () => {
        beforeEach(async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={0}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test('Then it should display the HomePage', async () => {
            const title = /Test Home/i;
            const element = await screen.findByText(title);
            expect(element).toBeInTheDocument();
        });
    });
    describe(`When we render the component 
            And the route is todo`, () => {
        beforeEach(async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={1}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test('Then it should display the TodoPage', async () => {
            const title = /Test Todo/i;
            const element = await screen.findByText(title);
            expect(element).toBeInTheDocument();
        });
    });
    describe(`When we render the component 
            And the route is about`, () => {
        beforeEach(async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={2}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test('Then it should display the AboutPage', async () => {
            const title = /Test About/i;
            const element = await screen.findByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
