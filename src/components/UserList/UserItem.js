import PropTypes from 'prop-types';
import './User.scss';

function UserItem({ id, name, number, onClick }) {
  return (
    <li className="item">
      <span>
        {name}: {number}
      </span>
      <button id={id} type="button" onClick={onClick} className="btn">
        Delete
      </button>
    </li>
  );
}

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UserItem;
