import { TaskModel } from '../models/task';
import { TaskRepository } from './task.repository';

describe('Given TaskApi Service', () => {
    describe('When we instantiate it', () => {
        let service: TaskRepository;
        beforeEach(() => {
            service = new TaskRepository();
        });
        test(`Then if I use service.getTask() 
            it should return a Promise of an Array of Task`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then if I use service.createTask()
                it should return a Promise of the crated task`, async () => {
            const mockTask = new TaskModel('', '');
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockTask),
            });
            const result = await service.create(mockTask);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockTask);
        });
        test('Then if I use .... it should ...', async () => {
            // TODO await service.delete(1);
        });
        test('Then if I use ..... it should ...', async () => {
            // TODO await service.update({ id: 1, isComplete: true });
        });
    });
});
