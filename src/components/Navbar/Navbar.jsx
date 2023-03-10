import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';

// const getClassName = ({ isActive }) => {
//   const className = isActive ? `${css.link} ${css.active}` : css.link;
//   return className;
// };
const Navbar = () => {
  return (
    <div className="container">
      <ul className={css.nav}>
        <li>
          <NavLink className={css.link} to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
