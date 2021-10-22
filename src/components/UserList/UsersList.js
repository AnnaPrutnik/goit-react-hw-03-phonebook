import UserItem from './UserItem';
import PropTypes from 'prop-types';
import './User.scss';

function UserList({ users, onClick }) {
  return (
    <ul className="list">
      {users.map(user => (
        <UserItem
          key={user.id}
          name={user.name}
          number={user.number}
          onClick={onClick}
          id={user.id}
        />
      ))}
    </ul>
  );
}
UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func,
};

export default UserList;
