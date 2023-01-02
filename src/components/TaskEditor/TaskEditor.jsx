import css from './TaskEditor.module.css';

export const TaskEditor = () => {
    return (
        <form className={css.form}>
            <input className={css.input} type="text" name='text' />
            <button type='submit' className={css.button} >Add task</button>
        </form>
    );
}