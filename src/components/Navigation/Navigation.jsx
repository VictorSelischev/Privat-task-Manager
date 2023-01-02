import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/tasks'>Tasks</NavLink>
        </nav>
    );
}