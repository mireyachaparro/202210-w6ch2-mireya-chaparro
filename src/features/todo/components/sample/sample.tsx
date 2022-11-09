import { useTasks } from '../../hooks/usetasks';

export function Sample() {
    const { tasks } = useTasks();

    return (
        <>
            {tasks.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </>
    );
}
