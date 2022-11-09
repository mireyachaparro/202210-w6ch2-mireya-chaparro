import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ProtoTask, Task } from '../models/task';
import * as ac from '../reducer/action.creators';
import { TaskRepository } from '../services/task.repository';

export const useTasks = () => {
    // La gestión básica de los estados en react
    // const [first, setFirst] = useState([]);
    // se sustituye por el mecanismo unidireccional proporcionado por redux
    const tasks = useSelector((state: rootState) => state.tasks);
    const dispatcher = useDispatch();
    const apiTask = useMemo(() => new TaskRepository(), []);

    useEffect(() => {
        apiTask
            .getAll()
            .then((tasks) => dispatcher(ac.loadActionCreator(tasks)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiTask, dispatcher]);

    const handleAdd = (newTask: ProtoTask) => {
        apiTask
            .create(newTask)
            .then((task: Task) => dispatcher(ac.addActionCreator(task)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateTask: Partial<Task>) => {
        apiTask
            .update(updateTask)
            .then((task: Task) => dispatcher(ac.updateActionCreator(task)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: number) => {
        apiTask
            .delete(id)
            .then(() => dispatcher(ac.deleteActionCreator(id)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        tasks,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
