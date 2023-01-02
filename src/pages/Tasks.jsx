import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/tasks/tasksSelectors';
import { TaskEditor } from '../components/TaskEditor/TaskEditor';
import { TaskList } from 'components/TaskList/TaskList';
import { fetchTasks } from 'redux/tasks/tasksOperations';

export default function Tasks() {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <>
            <title>Your tasks</title>
            <TaskEditor />
            <div>{isLoading && 'Request in progress...'}</div>
            <TaskList />
        </>
    );
}