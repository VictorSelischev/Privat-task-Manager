import { TaskEditor } from '../components/TaskEditor/TaskEditor';
import { TaskList } from 'components/TaskList/TaskList';

export default function Tasks() {
    return (
        <>
            <title>Your tasks</title>
            <TaskEditor />
            <div>Request in progress...</div>
            <TaskList />
        </>
    );
}