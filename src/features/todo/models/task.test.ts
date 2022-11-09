import { TaskModel } from './task';

describe('Given the class TaskModel', () => {
    describe('When we instantiate it', () => {
        const task = new TaskModel('', '');
        test('Then we should have an object ot the class', () => {
            expect(task).toBeInstanceOf(TaskModel);
        });
    });
});
