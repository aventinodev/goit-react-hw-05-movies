import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};
export const Header = () => {
  return (
    <div className={css.wrapper}>
      <div className="container">
        <ul className={css.nav}>
          <li>
            <NavLink className={getClassName} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getClassName} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
