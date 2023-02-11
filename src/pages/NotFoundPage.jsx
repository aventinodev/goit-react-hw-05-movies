import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { iconSize } from 'services/utils/iconSize';

const NotFoundPage = () => {
  return (
    <div className="container">
      <h2 className="title">Page not found</h2>
      <Link className="link" to="/">
        <span>
          <BsArrowLeftShort
            size={iconSize.sm}
            style={{
              fill: 'inherit',
            }}
          />
        </span>{' '}
        To Main page
      </Link>
    </div>
  );
};
export default NotFoundPage;
