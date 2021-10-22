import './Forms.scss';
import PropTypes from 'prop-types';

function Filter({ filter, handleFilter }) {
  return (
    <label htmlFor="filter" className="label filterLabel">
      Find contacts by name
      <input
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        className="input filterInput"
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
};
export default Filter;
