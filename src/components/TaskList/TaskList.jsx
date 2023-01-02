import { useSelector } from 'react-redux';
import Tasks from 'pages/Tasks';
import { Task } from '../Task/Task';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';
import css from './TaskList.module.css';

export const TaskList = () => {
    const tasks = useSelector(selectAllTasks);

    return (
        <ul>
            {tasks.map(({id, text}) => (
                <li key={id}>
                    <Task id={id} text={text} />
                </li>
            ))}
        </ul>
    );
}