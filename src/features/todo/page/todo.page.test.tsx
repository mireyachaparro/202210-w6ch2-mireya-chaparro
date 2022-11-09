import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Todo from './todo.page';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';

describe('Given Todo component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <Todo />
                    </Router>
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const title = /Todo/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
