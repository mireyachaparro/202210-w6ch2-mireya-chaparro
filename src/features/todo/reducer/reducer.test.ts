import { taskReducer } from './reducer';
import { actionTypes } from './action.types';
import { Task } from '../models/task';

describe('Given the function taskReducer', () => {
    const taskMock: Task = {
        id: 1,
        title: '',
        responsible: '',
        isComplete: false,
    };

    let action: { type: string; payload: unknown };
    let state: Array<Task>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [taskMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = taskReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: taskMock,
            };
            state = [];
        });
        test('Then the returned state should include the action payload', () => {
            const result = taskReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...taskMock, title: 'Update task' },
            };
            state = [taskMock];
        });
        test('Then the returned state should include the action payload', () => {
            const result = taskReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...taskMock, id: '2', title: 'Update task' },
            };
            state = [taskMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = taskReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: taskMock,
            };
            state = [taskMock];
        });
        test('Then the returned state should not include the action payload', () => {
            const result = taskReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe('When the action is delete and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: { ...taskMock, id: '2' },
            };
            state = [taskMock];
        });
        test('Then the returned state should should be the original state', () => {
            const result = taskReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [taskMock];
        });
        test('Then the returned state should be ...', () => {
            const result = taskReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
