import Tasks from 'pages/Tasks';
import css from './TaskList.module.css';

export const TaskList = () => {
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